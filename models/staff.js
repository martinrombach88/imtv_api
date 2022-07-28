const db = require("../util/database.js");
const express = require("express");

exports.addStaff = (staffItem) => {
  const string =
    (staffItem.body.titleKR ? '"' + staffItem.body.titleKR + '"' : '""') +
    ", " +
    (staffItem.body.titleENG ? '"' + staffItem.body.titleENG + '"' : '"') +
    ", " +
    (staffItem.body.nameKR ? '"' + staffItem.body.nameKR + '"' : '"') +
    ", " +
    (staffItem.body.nameENG ? '"' + staffItem.body.nameENG + '"' : '"') +
    ", " +
    (staffItem.body.infoKR ? '"' + staffItem.body.infoKR + '"' : '"') +
    ", " +
    (staffItem.body.infoENG ? '"' + staffItem.body.infoENG + '"' : '"');

  db.execute(
    "INSERT INTO staff (titleENG, titleKR, nameENG, nameKR, infoKR, infoENG) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAll = () => {
  return db.execute("SELECT * FROM staff ORDER BY orderID");
};

exports.deleteStaff = (staffId) => {
  db.execute("DELETE FROM staff WHERE id =" + staffId).catch((err) => {
    console.log(err);
  });
};

exports.updateStaff = (staffItem) => {
  const string =
    (staffItem.body.titleKR ? '"' + staffItem.body.titleKR + '"' : '""') +
    ", " +
    (staffItem.body.titleENG ? '"' + staffItem.body.titleENG + '"' : '"') +
    ", " +
    (staffItem.body.nameKR ? '"' + staffItem.body.nameKR + '"' : '"') +
    ", " +
    (staffItem.body.nameENG ? '"' + staffItem.body.nameENG + '"' : '"') +
    ", " +
    (staffItem.body.infoKR ? '"' + staffItem.body.infoKR + '"' : '"') +
    ", " +
    (staffItem.body.infoENG ? '"' + staffItem.body.infoENG + '"' : '"');

  db.execute(
    "UPDATE staff SET (titleENG, titleKR, nameENG, nameKR, infoKR, infoENG) VALUES(" +
      string +
      +"WHERE id = " +
      req.id
  );
};

exports.updateStaffOrder = (staffList) => {
  for (let i = 0; i < staffList.length; i++) {
    db.execute(
      "UPDATE staff SET orderID = " +
        staffList[i].orderID +
        " WHERE id = " +
        staffList[i].id
    );
  }
};
