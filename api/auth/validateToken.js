const jwt = require('jsonwebtoken');
const config = require('config');

const salt = config.get('hashes.jwtSecretKey');

module.exports = async (token) => {
  if(!token) {
    console.error('Отсутствует токен аутентификации');
    return await null;
  }

  try {
    return await jwt.verify(token, salt);
  } catch (error) {
    console.log(error);
    return await null;
  }
}
