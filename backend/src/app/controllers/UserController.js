import User from '../models/User';

class UserController {
  async store(req, res) {
    if (req.isAdmin === false) {
      return res.status(400).json({ error: 'Is not admin' });
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
    const { id, email, oldPassword } = req.body;
    const user = await User.findByPk(id);

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
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
}

export default new UserController();
