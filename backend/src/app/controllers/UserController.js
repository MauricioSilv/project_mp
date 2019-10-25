import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    if (req.isAdmin === false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const users = await User.findAll({
      where: { is_admin: false },
      attributes: ['id', 'name', 'email'],
    });

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (req.isAdmin === false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, is_admin } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      is_admin,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, email, oldPassword } = req.body;
    const user = await User.findByPk(id);

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    if (email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { name, is_admin } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      is_admin,
    });
  }

  async destroy(req, res) {
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Not authorized' });
    }
    const { idUser } = req.params;
    const findUser = await User.findByPk(idUser);

    if (!findUser) {
      return res.status(400).json({ error: 'User not found' });
    }

    await findUser.destroy();

    return res.send();
  }
}

export default new UserController();
