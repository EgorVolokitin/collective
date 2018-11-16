const config = {};

config.dbSettings = {
    host: 'localhost',
    dialect: 'postgres',
    database: 'sphere-connection',
    user: 'sphere-connection-user-db',
    password: 'qwerty',
    port: 5432
};

config.hashes = {
    passwordsSalt: 'KDwvPSMgJFxKWgrnAtJYi370h52FZXSA', // salt for passwords
    jwtSecretKey: 'cAd75ZdoFVpbpyuKFrtX1pk3Vn3PzP78'
}

module.exports = config;
