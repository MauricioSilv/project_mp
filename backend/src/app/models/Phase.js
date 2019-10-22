import Sequelize, { Model } from 'sequelize';

class Phase extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        id_teams: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Team, { foreignKey: 'id_teams' });
  }
}
export default Phase;
