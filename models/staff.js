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
    (staffItem.body[1] ? "'" + staffItem.body[1] + "'" : "''") +
    ", " +
    (staffItem.body[2] ? "'" + staffItem.body[2] + "'" : "''") +
    ", " +
    (staffItem.body[3] ? "'" + staffItem.body[3] + "'" : "''") +
    ", " +
    (staffItem.body[4] ? "'" + staffItem.body[4] + "'" : "''") +
    ", " +
    (staffItem.body[5] ? "'" + staffItem.body[5] + "'" : "''") +
    ", " +
    (staffItem.body[6] ? "'" + staffItem.body[6] + "'" : "''") +
    ", " +
    (staffItem.body[7] ? "'" + staffItem.body[7] + "'" : "''") +
    ", " +
    (staffItem.body[8] ? "'" + staffItem.body[8] + "'" : "''") +
    ", " +
    (staffItem.body[9] ? "'" + staffItem.body[9] + "'" : "''") +
    ", " +
    (staffItem.body[10] ? "'" + staffItem.body[10] + "'" : "''") +
    ", " +
    (staffItem.body[11] ? "'" + staffItem.body[11] + "'" : "''") +
    ", " +
    (staffItem.body[12] ? "'" + staffItem.body[12] + "'" : "''") +
    ", " +
    (staffItem.body[13] ? "'" + staffItem.body[13] + "'" : "''") +
    ", " +
    (staffItem.body[14] ? "'" + staffItem.body[14] + "'" : "''") +
    ", " +
    (staffItem.body[15] ? "'" + staffItem.body[15] + "'" : "''") +
    ", " +
    (staffItem.body[16] ? "'" + staffItem.body[16] + "'" : "''") +
    ", " +
    (staffItem.body[17] ? "'" + staffItem.body[17] + "'" : "''") +
    ", " +
    (staffItem.body[18] ? "'" + staffItem.body[18] + "'" : "''") +
    ", " +
    (staffItem.body[19] ? "'" + staffItem.body[19] + "'" : "''") +
    ", " +
    (staffItem.body[20] ? "'" + staffItem.body[20] + "'" : "''");
  console.log(string);
  db.execute(
    "INSERT INTO staff (titleKR, titleENG, nameKR, nameENG, infoKR1, infoKR2, infoKR3, infoKR4, infoKR5, infoKR6, infoKR7, infoKR8, infoKR9, infoKR10, infoENG1, infoENG2, infoENG3, infoENG4, infoENG5, infoENG6, infoENG7, infoENG8, infoENG9, infoENG10) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAllStaff = () => {
  return db.execute("SELECT * FROM staff ORDER BY id");
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
      "',  infoKR1 = '" +
      staffItem[1] +
      "',  infoKR2 = '" +
      staffItem[2] +
      "',  infoKR3 = '" +
      staffItem[3] +
      "',  infoKR4 = '" +
      staffItem[4] +
      "',  infoKR5 = '" +
      staffItem[5] +
      "',  infoKR6 = '" +
      staffItem[6] +
      "',  infoKR7 = '" +
      staffItem[7] +
      "',  infoKR8 = '" +
      staffItem[8] +
      "',  infoKR9 = '" +
      staffItem[9] +
      "',  infoKR10 = '" +
      staffItem[10] +
      "', infoENG1 = '" +
      staffItem[11] +
      "', infoENG2 = '" +
      staffItem[12] +
      "', infoENG3 = '" +
      staffItem[13] +
      "', infoENG4 = '" +
      staffItem[14] +
      "', infoENG5 = '" +
      staffItem[15] +
      "', infoENG6 = '" +
      staffItem[16] +
      "', infoENG7 = '" +
      staffItem[17] +
      "', infoENG8 = '" +
      staffItem[18] +
      "', infoENG9 = '" +
      staffItem[19] +
      "', infoENG10 = '" +
      staffItem[20] +
      "', nameKR = '" +
      staffItem.nameKR +
      "', nameENG = '" +
      staffItem.nameENG +
      "' WHERE id = '" +
      idString +
      "'"
  );
};
