import Sequelize, { Model } from 'sequelize';

class TypeEquipment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default TypeEquipment;
