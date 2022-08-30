const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "b0328f4f47da09",
  database: "heroku_dcff2cd9babd987",
  password: "ce04deac",
});

//Set timeout = 0 to avoid ERRCONN error.

module.exports = pool.promise();
