const express = require("express");
const mediaModel = require("../models/media");

exports.getAllMedia = (req, res, next) => {
  mediaModel
    .getAll()
    .then(([mediaItems]) => {
      res.status(200).json({
        mediaItems,
      });
    })
    .catch((err) => console.log(err));
};

// exports.addMedia = () => {};
