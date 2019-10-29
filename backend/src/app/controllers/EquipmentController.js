import Equipment from '../models/Equipment';

class EquipmentController {
  async store(req, res) {
    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const newEquipment = await Equipment.create(req.body);

    return res.json(newEquipment);
  }
}

export default new EquipmentController();
