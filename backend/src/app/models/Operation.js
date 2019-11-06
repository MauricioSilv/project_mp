import Sequelize, { Model } from 'sequelize';

class Operation extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        id_team: Sequelize.INTEGER,
        id_phase: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: 'id_team' });
    this.belongsTo(models.Phase, { foreignKey: 'id_phase' });
  }
}
export default Operation;
