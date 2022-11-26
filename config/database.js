import sequelize from "sequelize";

const db = new sequelize("railway", "root", "7VGvF6EVdlYq84evtoFu", {
  host: "containers-us-west-109.railway.app",
  dialect: "mysql",
  port: "5866",
});

export default db;
