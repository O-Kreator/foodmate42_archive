const mysql = require("mysql2/promise");

async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: "FoodMate42"
  });

  return connection;
}

module.exports = {
  getConnection,
};
