module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bd_mp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
