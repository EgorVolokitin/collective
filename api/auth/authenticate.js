const jwt = require('jsonwebtoken');
const config = require('config');

const salt = config.get('hashes.jwtSecretKey');

module.exports = async ({ uid }) => {
    return await jwt.sign({
        uid: uid
    }, salt);
}
