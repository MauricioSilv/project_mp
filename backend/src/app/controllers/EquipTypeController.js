import * as Yup from 'yup';
import TypeEquipment from '../models/TypeEquipment';

class EquipTypeController {
  async index(req, res) {
    const listEquipments = await TypeEquipment.findAll();

    return res.json(listEquipments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(3)
        .required(),
    });

    if (req.isAdmin !== true) {
      return res.status(400).json({ error: 'Is not admin' });
    }

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id, name } = await TypeEquipment.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new EquipTypeController();
