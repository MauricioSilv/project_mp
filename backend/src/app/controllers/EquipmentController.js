import Equipment from '../models/Equipment';
import File from '../models/File';
import TypeEquipment from '../models/TypeEquipment';

class EquipmentController {
  async index(req, res) {
    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }
    const equipments = await Equipment.findAll({
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['id', 'url', 'path'],
        },
        {
          model: TypeEquipment,
          as: 'types',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(equipments);
  }

  async store(req, res) {
    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const newEquipment = await Equipment.create(req.body);

    return res.json(newEquipment);
  }
}

export default new EquipmentController();
