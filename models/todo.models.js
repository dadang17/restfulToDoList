import sequelize from "sequelize";

import db from "../config/database.js";

const { DataTypes } = sequelize;

const todolist = db.define(
  "todolist",
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    userid: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default todolist;
