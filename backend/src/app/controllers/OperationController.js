import Operation from '../models/Operation';
import Team from '../models/Team';
import Phase from '../models/Phase';

class OperationController {
  async index(req, res) {
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const operations = await Operation.findAll({
      include: [
        {
          model: Team,
          as: 'OpTeam',
          attributes: ['id', 'name', 'createdAt'],
        },
        {
          model: Phase,
          as: 'OpPhase',
          attributes: ['id', 'name', 'createdAt'],
        },
      ],
    });

    return res.json(operations);
  }

  async store(req, res) {
    const { name, id_team, id_phase } = req.body;

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }
    const operation = await Operation.create({
      name,
      id_team,
      id_phase,
    });

    return res.json(operation);
  }

  async update(req, res) {
    const { idOp } = req.params;

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const findOperation = await Operation.findByPk(idOp);
    const {
      name,
      id_team,
      id_phase,
      createdAt,
      updatedAt,
    } = await findOperation.update(req.body);

    return res.json({
      name,
      id_team,
      id_phase,
      createdAt,
      updatedAt,
    });
  }
}

export default new OperationController();
