const register = require('./register');
const authenticate = require('./authenticate');
const login = require('./login');
const validateToken = require('./validateToken');

module.exports = {
    authenticate,
    login,
    register,
    validateToken,
};
