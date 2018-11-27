const config = {};

config.dbSettings = {
  host: 'localhost' || process.env.DB_HOST,
  dialect: 'postgres',
  database: 'sphere-connection' || process.env.DB_DATABASE,
  user: 'sphere-connection-user-db' || process.env.DB_USER,
  password: 'qwerty' || process.env.DB_PASSWORD,
  port: 5432
};

module.exports = config;
