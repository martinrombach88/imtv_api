const db = require("../util/database offline.js");
const express = require("express");

exports.getLogin = (id) => {
  return db.execute("SELECT * FROM login WHERE username = 'joseph'");
};
