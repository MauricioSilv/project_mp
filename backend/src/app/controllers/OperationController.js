import * as Yup from 'yup';
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
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(4)
        .required(),
      id_team: Yup.number().required(),
      id_phase: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

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
    const schema = Yup.object().shape({
      name: Yup.string().min(4),
      id_team: Yup.number(),
      id_phase: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const findOperation = await Operation.findByPk(idOp);
    const operations = await findOperation.update(req.body);

    return res.json(operations);
  }
}

export default new OperationController();
