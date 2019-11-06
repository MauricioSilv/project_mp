import Operation from '../models/Operation';

class OperationController {
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
}

export default new OperationController();
