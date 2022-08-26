const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "imtv",
  password: "password",
});

//Set timeout = 0 to avoid ERRCONN error.

module.exports = pool.promise();
