const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "imtv",
  password: "password",
});

module.exports = pool.promise();
