import Sequelize, { Model } from 'sequelize';

class Operation extends Model {
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

  static associate(models) {
    this.belongsTo(models.Team, { foreignKey: 'id_team', as: 'OpTeam' });
    this.belongsTo(models.Phase, { foreignKey: 'id_phase', as: 'OpPhase' });
  }
}
export default Operation;
