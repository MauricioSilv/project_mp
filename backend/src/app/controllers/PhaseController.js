import Phase from '../models/Phase';

class PhaseController {
  async store(req, res) {
    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }
    const newPhase = await Phase.create(req.body);

    return res.json(newPhase);
  }
}

export default new PhaseController();
