const { Sequelize } = require("sequelize");
import * as pg from "pg";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: pg,
});

export default sequelize;
