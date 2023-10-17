const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'blogsprojects',
    username: 'postgres',
    password: 'database',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
});

module.exports = sequelize;
