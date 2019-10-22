module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      num_serie: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color_equipment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      malfunction: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'type_equipaments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_file: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('equipments');
  },
};
