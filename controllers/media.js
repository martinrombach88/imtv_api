const express = require("express");
const mediaModel = require("../models/media");

exports.getAllMedia = () => {
  mediaModel
    .getAll()
    .then(([mediaItems]) => {
      return mediaItems;
    })
    .catch((err) => console.log(err));
};

///TEST SELECT

// db.execute("SELECT * FROM media")
// .then((result) => {})
// .catch((err) => {
//   console.log(err);
// });
