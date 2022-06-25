const express = require("express");
const workModel = require("../models/work");

exports.getAllWork = (req, res, next) => {
  workModel
    .getAll()
    .then(([workItems]) => {
      res.status(200).json({
        workItems,
      });
    })
    .catch((err) => console.log(err));
};

// exports.addWork = () => {};
