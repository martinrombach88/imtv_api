const db = require("../util/database.js");
const express = require("express");

exports.postWork = (workItem) => {
  const string =
    (workItem.body.titleKR ? "'" + workItem.body.titleKR + "'" : "''") +
    ", " +
    (workItem.body.titleENG ? "'" + workItem.body.titleENG + "'" : "''") +
    ", " +
    (workItem.body.image ? "'" + workItem.body.image + "'" : "''") +
    ", " +
    (workItem.body.imageTall ? "'" + workItem.body.imageTall + "'" : "''") +
    ", " +
    (workItem.body.clipVid ? "'" + workItem.body.clipVid + "'" : "''") +
    ", " +
    (workItem.body.fullVid ? "'" + workItem.body.fullVid + "'" : "''") +
    ", " +
    (workItem.body.channels ? "'" + workItem.body.channels + "'" : "''") +
    ", " +
    (workItem.body.releaseDate ? "'" + workItem.body.releaseDate + "'" : "''") +
    ", " +
    (workItem.body.producerKR ? "'" + workItem.body.producerKR + "'" : "''") +
    ", " +
    (workItem.body.writerKR ? "'" + workItem.body.writerKR + "'" : "''") +
    ", " +
    (workItem.body.starringKR ? "'" + workItem.body.starringKR + "'" : "''") +
    ", " +
    (workItem.body.descriptionKR
      ? "'" + workItem.body.descriptionKR + "'"
      : "''") +
    ", " +
    (workItem.body.producerENG ? "'" + workItem.body.producerENG + "'" : "''") +
    ", " +
    (workItem.body.writerENG ? "'" + workItem.body.writerENG + "'" : "''") +
    ", " +
    (workItem.body.starringENG ? "'" + workItem.body.starringENG + "'" : "''") +
    ", " +
    (workItem.body.descriptionENG
      ? "'" + workItem.body.descriptionENG + "'"
      : "''") +
    ", " +
    (workItem.body.subTitleKR ? "'" + workItem.body.subTitleKR + "'" : "''") +
    ", " +
    (workItem.body.subTitleENG ? "'" + workItem.body.subTitleENG + "'" : "''") +
    ", " +
    (workItem.body.color ? "'" + workItem.body.color + "'" : "''") +
    ", " +
    (workItem.body.backgroundColor
      ? "'" + workItem.body.backgroundColor + "'"
      : "''") +
    ", " +
    ("'" + workItem.body.inProduction + "'");

  db.execute(
    "INSERT INTO work (titleKR, titleENG, image, imageTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR, subTitleENG, color, backgroundColor, inProduction) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAll = () => {
  return db.execute("SELECT * FROM work ORDER BY orderID ");
};
