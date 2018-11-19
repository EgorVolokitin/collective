const db = require('../schemas/db');
const crypto = require('crypto');
const config = require('config');

module.exports = async ({ email, password, nickname }) => {
    const salt = config.get('hashes.passwordsSalt');
    const hash = crypto.pbkdf2Sync(password, salt, 50000, 128, 'sha512');

    const user = await db.Users.create({
        email: email,
        password: hash.toString('hex'),
        nickname: nickname
    });

    return user;
}
