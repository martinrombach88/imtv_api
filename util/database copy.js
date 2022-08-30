const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "username",
  database: "imtv",
  password: "password",
});

module.exports = pool.promise();
