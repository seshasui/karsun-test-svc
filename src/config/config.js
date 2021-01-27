const fs = require('fs');
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.AFP_SCHEMA_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data',
  }
};
