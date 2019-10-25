import Sequelize, { Model } from 'sequelize';

class UsersTeam extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        teamId: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' });
    this.belongsTo(models.Team, { foreignKey: 'teamId' });
  }
}
export default UsersTeam;
