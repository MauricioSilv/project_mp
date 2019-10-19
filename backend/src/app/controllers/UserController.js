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
    const { email, oldPassword } = req.body;

    if (req.isAdmin === false) {
      return res.status(400).json({ error: 'Is not admin' });
    }
    const user = await User.findByPk(req.userId);

    return res.json({ ok: true });
  }
}

export default new UserController();
