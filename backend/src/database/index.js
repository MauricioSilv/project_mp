import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import TypeEquipment from '../app/models/TypeEquipment';
import Operation from '../app/models/Operation';
import Phase from '../app/models/Phase';
import Team from '../app/models/Team';
import Equipment from '../app/models/Equipment';

import databaseConfig from '../config/database';

const models = [User, File, TypeEquipment, Equipment, Team, Operation, Phase];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
