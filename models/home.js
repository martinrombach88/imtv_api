const db = require("../util/database.js");
const express = require("express");

exports.getLogin = (id) => {
  return db.execute("SELECT * FROM login WHERE username = 'joseph'");
};
