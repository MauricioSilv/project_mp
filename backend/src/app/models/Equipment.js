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
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Team);
    this.belongsTo(models.TypeEquipment, {
      foreignKey: 'id_type',
      as: 'types',
    });
    this.belongsTo(models.File, { foreignKey: 'id_file', as: 'image' });
  }
}
export default Equipment;
