import Sequelize, { Model } from 'sequelize';

class Phase extends Model {
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
    this.hasMany(models.Operation);
    this.belongsTo(models.Team, { as: 'phasesTeam', foreignKey: 'id_teams' });
  }
}
export default Phase;
