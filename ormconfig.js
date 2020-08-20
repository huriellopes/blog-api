// eslint-disable-next-line
require('dotenv').config();

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['./src/api/models/**/*.ts'],
  migrations: ['./src/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: './src/api/models',
  },
};
