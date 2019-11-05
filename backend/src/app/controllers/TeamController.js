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
          attributes: ['id', 'name', 'email'],
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

  async update(req, res) {
    const { idTeam } = req.params;
    const { users, ...data } = req.body;
    const team = await Team.findByPk(idTeam);
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    await team.update(data);

    if (users && users.length > 0) {
      team.setUsers(users);
    }

    return res.json(team);
  }
}

export default new TeamController();
