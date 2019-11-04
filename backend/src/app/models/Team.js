import Sequelize, { Model } from 'sequelize';

class Team extends Model {
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
    this.belongsToMany(models.User, {
      through: 'UserTeams',
      foreignKey: 'team_id',
      as: 'users',
    });
  }
}
export default Team;
