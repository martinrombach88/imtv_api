const db = require("../util/database.js");
const express = require("express");

exports.postStaff = (staffItem) => {
  const string =
    (staffItem.body.titleKR ? "'" + staffItem.body.titleKR + "'" : "''") +
    ", " +
    (staffItem.body.titleENG ? "'" + staffItem.body.titleENG + "'" : "''") +
    ", " +
    (staffItem.body.nameKR ? "'" + staffItem.body.nameKR + "'" : "''") +
    ", " +
    (staffItem.body.nameENG ? "'" + staffItem.body.nameENG + "'" : "''") +
    ", " +
    (staffItem.body.infoKR ? "'" + staffItem.body.infoKR + "'" : "''") +
    ", " +
    (staffItem.body.infoENG ? "'" + staffItem.body.infoENG + "'" : "''");

  db.execute(
    "INSERT INTO staff (titleENG, titleKR, nameENG, nameKR, infoKR, infoENG) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAll = () => {
  return db.execute("SELECT * FROM staff");
};
