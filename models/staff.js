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
    "INSERT INTO staff (titleKR, titleENG, nameENG, nameKR, infoKR, infoENG) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAllStaff = () => {
  return db.execute("SELECT * FROM staff ORDER BY orderID");
};

exports.getStaffItem = (id) => {
  return db.execute("SELECT * FROM staff WHERE id = " + id);
};

exports.deleteStaff = (staffId) => {
  db.execute("DELETE FROM staff WHERE id =" + staffId).catch((err) => {
    console.log(err);
  });
};

exports.updateStaff = (staffItem) => {
  const idString = staffItem.id + "";
  db.execute(
    "UPDATE staff SET titleKR =  '" +
      staffItem.titleKR +
      "', titleENG = '" +
      staffItem.titleENG +
      "',  infoKR = '" +
      staffItem.infoKR +
      "', infoENG = '" +
      staffItem.infoENG +
      "', nameKR = '" +
      staffItem.nameKR +
      "', nameENG = '" +
      staffItem.nameENG +
      "' WHERE id = '" +
      idString +
      "'"
  );
};
exports.resetStaffOrder = () => {
  for (let i = 0; i < 999; i++) {
    db.execute("UPDATE staff SET orderID ='" + i + "' WHERE id = " + i);
  }
};

exports.staffDirectionUp = (idObject) => {
  db.execute(
    "UPDATE staff SET orderID = " +
      idObject.currentOrderID +
      " WHERE orderID = " +
      idObject.prevOrderID
  );
  db.execute(
    "UPDATE staff SET orderID = " +
      idObject.prevOrderID +
      " WHERE id = '" +
      idObject.id +
      "'"
  );
};

exports.staffDirectionDown = (idObject) => {
  db.execute(
    "UPDATE staff SET orderID = " +
      idObject.currentOrderID +
      " WHERE orderID = " +
      idObject.nextOrderID
  );
  db.execute(
    "UPDATE staff SET orderID = " +
      idObject.nextOrderID +
      " WHERE id = '" +
      idObject.id +
      "'"
  );
};
