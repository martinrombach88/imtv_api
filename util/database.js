const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bd95792bb84300",
  database: "heroku_caa56290b6f5a69",
  password: "7395f4a9",
});

module.exports = pool.promise();
