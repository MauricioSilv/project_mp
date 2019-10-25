import Sequelize, { Model } from 'sequelize';

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        id_equipments: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      through: 'UsersTeam',
      foreignKey: 'id_users',
      as: 'teamUsers',
    });
    this.hasMany(models.Equipment, { foreignKey: 'id_equipments' });
  }
}
export default Team;
