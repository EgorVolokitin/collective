'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true, allowNull: false, autoIncrement: true },
    email: { type: 'text', allowNull: false, unique: true },
    nickname: { type: 'text', allowNull: false, unique: true },
    role: { type: 'int', allowNull: false, defaultValue: 0 }, // 0 - user, 500 - admin
    emailConfirmed: { type: 'boolean', allowNull: false, defaultValue: false },
    userBanned: { type: 'boolean', defaultValue: false, allowNull: false },
    password: { type: 'text', allowNull: false },
    createdAt: { type: 'timestamp' },
    updatedAt: { type: 'timestamp' }
  });
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  "version": 1
};
