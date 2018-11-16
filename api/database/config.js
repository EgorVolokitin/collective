const Sequelize = require('sequelize');
const config = require('config');

const settings = config.get('dbSettings');
const { host, port, user, password, database, dialect } = settings;

const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    operatorsAliases: false,
    dialect,

    pool: {
        acquire: 30000,
        idle: 10000
    },
});

module.exports = sequelize;
