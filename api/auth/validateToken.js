const jwt = require('jsonwebtoken');
const config = require('config');

const salt = config.get('hashes.jwtSecretKey');

module.exports = async (token) => {
  try {
    return await jwt.verify(token, salt);
  } catch (error) {
    console.log(error);
    return await null;
  }
}
