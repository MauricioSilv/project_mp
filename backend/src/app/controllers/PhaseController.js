import Phase from '../models/Phase';
import Team from '../models/Team';

class PhaseController {
  async index(req, res) {
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const listPhases = await Phase.findAll({
      include: [
        {
          model: Team,
          as: 'phasesTeam',
        },
      ],
    });
    return res.json(listPhases);
  }

  async store(req, res) {
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }
    const newPhase = await Phase.create(req.body);

    return res.json(newPhase);
  }

  async update(req, res) {
    const { idPhase } = req.params;
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const findPhase = await Phase.findByPk(idPhase);

    const phases = await findPhase.update(req.body);

    return res.json(phases);
  }

  async destroy(req, res) {
    const { idPhase } = req.params;
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    const findPhase = await Phase.findByPk(idPhase);

    await findPhase.destroy();

    return res.send();
  }
}

export default new PhaseController();
