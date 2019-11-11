import * as Yup from 'yup';
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
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(4)
        .required(),
      num_serie: Yup.string()
        .min(6)
        .required(),
      description: Yup.string()
        .min(10)
        .required(),
      color_equipment: Yup.string().required(),
      malfunction: Yup.string()
        .min(4)
        .required(),
      latitude: Yup.string().required(),
      longitude: Yup.string().required(),
      id_type: Yup.number().required(),
      id_file: Yup.number().required(),
      team_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Validation fails' });
    }

    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const newEquipments = await Equipment.create(req.body);

    return res.json(newEquipments);
  }

  async update(req, res) {
    const { idEquip } = req.params;
    const schema = Yup.object().shape({
      name: Yup.string().min(4),
      num_serie: Yup.string().min(6),
      description: Yup.string().min(10),
      color_equipment: Yup.string(),
      malfunction: Yup.string().min(4),
      latitude: Yup.string(),
      longitude: Yup.string(),
      id_type: Yup.number(),
      id_file: Yup.number(),
      team_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: 'Validation fails' });
    }

    if (req.isAdmin !== false) {
      return res.status(400).json({ error: 'Not authorized' });
    }

    const findEquipment = await Equipment.findByPk(idEquip);

    const equipment = await findEquipment.update(req.body);

    return res.json(equipment);
  }
}

export default new EquipmentController();
