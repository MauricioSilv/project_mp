module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('equipment', 'team_id', {
      type: Sequelize.INTEGER,
      references: { model: 'teams', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('equipment', 'team_id');
  },
};
