const express = require("express");
const staffModel = require("../models/staff");

exports.getAllStaff = (req, res, next) => {
  staffModel
    .getAll()
    .then(([staffItems]) => {
      res.status(200).json({
        staffItems,
      });
    })
    .catch((err) => console.log(err));
};

exports.postStaff = (req, res) => {
  staffModel.postStaff(req);
};

exports.deleteStaff = (req, res) => {
  staffModel.deleteStaff(req.body.id);
};

exports.updateStaffOrder = (req, res) => {
  staffModel.updateStaffOrder(req.body);
};
