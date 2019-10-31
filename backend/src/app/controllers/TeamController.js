import Team from '../models/Team';
import User from '../models/User';

class TeamController {
  async index(req, res) {
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const listTeams = await Team.findAll({
      include: [
        {
          model: User,
          as: 'users',
          attributes: ['id', 'name', 'email', 'is_admin'],
          through: { attributes: [] },
        },
      ],
    });

    return res.json(listTeams);
  }

  async store(req, res) {
    const { users, ...data } = req.body;

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const team = await Team.create(data);

    if (users && users.length > 0) {
      team.setUsers(users);
    }
    return res.json(team);
  }
}

export default new TeamController();
