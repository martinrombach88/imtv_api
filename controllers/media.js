const db = require("../util/database.js");
const mediaList = require("../test_data/mediaList.js");
const express = require("express");

//1. Make a working Insert Into call
//2. Loop over the media list with the insert into function
const addMedia = (mediaItem) => {
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
    (mediaItem.subtitleKR ? "'" + mediaItem.subtitleKR + "'" : "''") +
    ", " +
    (mediaItem.subtitleENG ? "'" + mediaItem.subtitleENG + "'" : "''") +
    ", " +
    (mediaItem.color ? "'" + mediaItem.color : "''") +
    ", " +
    (mediaItem.backgroundColor ? "'" + mediaItem.backgroundColor + "'" : "''") +
    ", " +
    ("'" + mediaItem.inProduction + "'");

  // const testQuery =
  //   "INSERT INTO media (titleKR, titleENG, mediaImg, mediaImgTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR,subTitleENG, color, backgroundColor, inProduction) VALUES(" +
  //   string +
  //   ")";
  // console.log(testQuery);

  db.execute(
    "INSERT INTO media (titleKR, titleENG, mediaImg, mediaImgTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR,subTitleENG, color, backgroundColor, inProduction) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getMedia = (req, res, next) => {
  addMedia(mediaList[10]);
};

///TEST SELECT

// db.execute("SELECT * FROM media")
// .then((result) => {})
// .catch((err) => {
//   console.log(err);
// });

//  for (media of mediaList) {
//   addMedia(media);
// }
