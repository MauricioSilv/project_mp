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
        latitude: Sequelize.DECIMAL(9, 6),
        longitude: Sequelize.DECIMAL(9, 6),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.TypeEquipment, {
      foreignKey: 'id_type',
      as: 'types',
    });
    this.belongsTo(models.File, { foreignKey: 'id_file', as: 'image' });
    this.belongsTo(models.Team, { foreignKey: 'team_id', as: 'EquipTeam' });
  }
}
export default Equipment;
