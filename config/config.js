require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USER,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_DBNAME,
    host: process.env.DEV_DATABASE_HOST,
    port: process.env.DEV_DATABASE_PORT,
    dialect: process.env.DEV_DATABASE_DIALECT,
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
  },
};
