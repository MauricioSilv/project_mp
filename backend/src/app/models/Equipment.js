import Sequelize, { Model } from 'sequelize';

class Equipment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        num_serie: Sequelize.STRING,
        description: Sequelize.STRING,
        color_equipment: Sequelize.STRING,
        malfunction: Sequelize.STRING,
        latitude: Sequelize.STRING,
        longitude: Sequelize.STRING,
        id_type: Sequelize.INTEGER,
        id_file: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.TypeEquipment, { foreignKey: 'id_type' });
    this.hasMany(models.File, { foreignKey: 'id_file' });
  }
}
export default Equipment;
