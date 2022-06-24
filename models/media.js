const db = require("../util/database.js");
const express = require("express");

exports.add = (mediaItem) => {
  const string =
    (mediaItem.titleKR ? "'" + mediaItem.titleKR + "'" : "''") +
    ", " +
    (mediaItem.titleENG ? "'" + mediaItem.titleENG + "'" : "''") +
    ", " +
    (mediaItem.mediaImg ? "'" + mediaItem.mediaImg + "'" : "''") +
    ", " +
    (mediaItem.mediaImg ? "'" + mediaItem.mediaImgTall + "'" : "''") +
    ", " +
    (mediaItem.clipVid ? "'" + mediaItem.clipVid + "'" : "''") +
    ", " +
    (mediaItem.fullVid ? "'" + mediaItem.fullVid + "'" : "''") +
    ", " +
    (mediaItem.channels ? "'" + mediaItem.channels + "'" : "''") +
    ", " +
    (mediaItem.releaseDate ? "'" + mediaItem.releaseDate + "'" : "''") +
    ", " +
    (mediaItem.producerKR ? "'" + mediaItem.producerKR + "'" : "''") +
    ", " +
    (mediaItem.writerKR ? "'" + mediaItem.writerKR + "'" : "''") +
    ", " +
    (mediaItem.starringKR ? "'" + mediaItem.starringKR + "'" : "''") +
    ", " +
    (mediaItem.descriptionKR ? "'" + mediaItem.descriptionKR + "'" : "''") +
    ", " +
    (mediaItem.producerENG ? "'" + mediaItem.producerENG + "'" : "''") +
    ", " +
    (mediaItem.writerENG ? "'" + mediaItem.writerENG + "'" : "''") +
    ", " +
    (mediaItem.starringENG ? "'" + mediaItem.starringENG + "'" : "''") +
    ", " +
    (mediaItem.descriptionENG ? "'" + mediaItem.descriptionENG + "'" : "''") +
    ", " +
    (mediaItem.subTitleKR ? "'" + mediaItem.subTitleKR + "'" : "''") +
    ", " +
    (mediaItem.subTitleENG ? "'" + mediaItem.subTitleENG + "'" : "''") +
    ", " +
    (mediaItem.color ? "'" + mediaItem.color + "'" : "''") +
    ", " +
    (mediaItem.backgroundColor ? "'" + mediaItem.backgroundColor + "'" : "''") +
    ", " +
    ("'" + mediaItem.inProduction + "'");

  db.execute(
    "INSERT INTO media (titleKR, titleENG, mediaImg, mediaImgTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR, subTitleENG, color, backgroundColor, inProduction) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAll = () => {
  return db.execute("SELECT * FROM media");
};
