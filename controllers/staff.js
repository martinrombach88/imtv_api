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

exports.addStaff = (req, res) => {
  staffModel.addStaff(req);
};

exports.updateStaff = (req, res) => {
  staffModel.updateStaff(req);
};

exports.deleteStaff = (req, res) => {
  staffModel.deleteStaff(req.body.id);
};

exports.updateStaffOrder = (req, res) => {
  staffModel.updateStaffOrder(req.body);
};
