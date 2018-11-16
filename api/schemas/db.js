const sequelize = require('../database/config');
const Sequelize = require('sequelize');

module.exports = {
    Users: sequelize.define('users', {
        email: { type: Sequelize.TEXT, allowNull: false, unique: true },
        nickname: { type: Sequelize.TEXT, allowNull: false, unique: true },
        role: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
        emailConfirmed: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        userBanned: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
        password: { type: Sequelize.TEXT, allowNull: false }
    }),
};
