const express = require("express");
const staffModel = require("../models/staff");
const staffList = require("../test_data/staffList");

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

// exports.add = () => {
//   staffModel.add(staffList[10]);
// };
