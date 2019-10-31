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

    const {
      name,
      num_serie,
      description,
      color_equipment,
      malfunction,
      latitude,
      longitude,
      id_type,
      id_file,
      team_id,
    } = await Equipment.create(req.body);

    return res.json({
      name,
      num_serie,
      description,
      color_equipment,
      malfunction,
      latitude,
      longitude,
      id_file,
      id_type,
      team_id,
    });
  }
}

export default new EquipmentController();
