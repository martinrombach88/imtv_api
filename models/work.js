const db = require("../util/database.js");
const express = require("express");

exports.add = (workItem) => {
  const string =
    (workItem.titleKR ? "'" + workItem.titleKR + "'" : "''") +
    ", " +
    (workItem.titleENG ? "'" + workItem.titleENG + "'" : "''") +
    ", " +
    (workItem.image ? "'" + workItem.image + "'" : "''") +
    ", " +
    (workItem.imageTall ? "'" + workItem.imageTall + "'" : "''") +
    ", " +
    (workItem.clipVid ? "'" + workItem.clipVid + "'" : "''") +
    ", " +
    (workItem.fullVid ? "'" + workItem.fullVid + "'" : "''") +
    ", " +
    (workItem.channels ? "'" + workItem.channels + "'" : "''") +
    ", " +
    (workItem.releaseDate ? "'" + workItem.releaseDate + "'" : "''") +
    ", " +
    (workItem.producerKR ? "'" + workItem.producerKR + "'" : "''") +
    ", " +
    (workItem.writerKR ? "'" + workItem.writerKR + "'" : "''") +
    ", " +
    (workItem.starringKR ? "'" + workItem.starringKR + "'" : "''") +
    ", " +
    (workItem.descriptionKR ? "'" + workItem.descriptionKR + "'" : "''") +
    ", " +
    (workItem.producerENG ? "'" + workItem.producerENG + "'" : "''") +
    ", " +
    (workItem.writerENG ? "'" + workItem.writerENG + "'" : "''") +
    ", " +
    (workItem.starringENG ? "'" + workItem.starringENG + "'" : "''") +
    ", " +
    (workItem.descriptionENG ? "'" + workItem.descriptionENG + "'" : "''") +
    ", " +
    (workItem.subTitleKR ? "'" + workItem.subTitleKR + "'" : "''") +
    ", " +
    (workItem.subTitleENG ? "'" + workItem.subTitleENG + "'" : "''") +
    ", " +
    (workItem.color ? "'" + workItem.color + "'" : "''") +
    ", " +
    (workItem.backgroundColor ? "'" + workItem.backgroundColor + "'" : "''") +
    ", " +
    ("'" + workItem.inProduction + "'");

  db.execute(
    "INSERT INTO work (titleKR, titleENG, image, imageTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR, subTitleENG, color, backgroundColor, inProduction) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAll = () => {
  return db.execute("SELECT * FROM work");
};
