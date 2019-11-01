import Equipment from '../models/Equipment';
import File from '../models/File';
import Team from '../models/Team';
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
        {
          model: Team,
          as: 'EquipTeam',
        },
      ],
    });

    return res.json(equipments);
  }

  async store(req, res) {
    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const newEquipments = await Equipment.create(req.body);

    return res.json(newEquipments);
  }

  async update(req, res) {
    const { idEquip } = req.params;

    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const findEquipment = await Equipment.findByPk(idEquip);

    const equipment = await findEquipment.update(req.body);

    return res.json(equipment);
  }
}

export default new EquipmentController();
