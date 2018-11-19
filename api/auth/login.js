const db = require('../schemas/db');
const crypto = require('crypto');
const config = require('config');

const Op = require('sequelize').Op

module.exports = async ({ emailOrNick, password }) => {
    const salt = config.get('hashes.passwordsSalt');
    const pwdHash = crypto.pbkdf2Sync(password, salt, 50000, 128, 'sha512');
    
    const user = await db.Users.findOne({
        attributes: ['id'],
        where: {
            [Op.or]: [{ email: emailOrNick }, { nickname: emailOrNick }],
            password: pwdHash.toString('hex')
        }
    });

    if(!user) {
        return null;
    }
    return user;
}
