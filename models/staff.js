const db = require("../util/database.js");
const express = require("express");
const staffList = require("../test_data/staffList");

exports.add = (staffItem) => {
  const infoStringKR = staffItem.infoKR.join();
  const infoStringENG = staffItem.infoENG.join();

  const string =
    (staffItem.titleKR ? "'" + staffItem.titleKR + "'" : "''") +
    ", " +
    (staffItem.titleENG ? "'" + staffItem.titleENG + "'" : "''") +
    ", " +
    (staffItem.nameKR ? "'" + staffItem.nameKR + "'" : "''") +
    ", " +
    (staffItem.nameENG ? "'" + staffItem.nameENG + "'" : "''") +
    ", " +
    (staffItem.infoKR ? "'" + infoStringKR + "'" : "''") +
    ", " +
    (staffItem.infoENG ? "'" + infoStringENG + "'" : "''");

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
