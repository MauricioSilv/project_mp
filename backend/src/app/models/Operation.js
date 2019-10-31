import Sequelize, { Model } from 'sequelize';

class Operation extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        id_team: Sequelize.INTEGER,
        id_phases: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: 'id_team' });
    this.belongsTo(models.Phase, { foreignKey: 'id_phases' });
  }
}
export default Operation;
