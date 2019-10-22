import Sequelize, { Model } from 'sequelize';

class Equip_type extends Model {
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
export default Equip_type;
