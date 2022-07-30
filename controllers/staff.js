const express = require("express");
const staffModel = require("../models/staff");

exports.getAllStaff = (req, res, next) => {
  staffModel
    .getAllStaff()
    .then(([staffItems]) => {
      res.status(200).json({
        staffItems,
      });
    })
    .catch((err) => console.log(err));
};

exports.getStaffItem = (req, res, next) => {
  staffModel
    .getStaffItem(req.params.id)
    .then(([staffItem]) => {
      res.status(200).json({
        staffItem,
      });
    })
    .catch((err) => console.log(err));
};

exports.addStaff = (req, res) => {
  staffModel.addStaff(req);
};

exports.updateStaff = (req, res) => {
  staffModel.updateStaff(req.body);
};

exports.deleteStaff = (req, res) => {
  staffModel.deleteStaff(req.body.id);
};

exports.staffDirectionUp = (req, res) => {
  let idObject = {
    id: parseInt(req.body.id),
    currentOrderID: parseInt(req.body.orderID),
    prevOrderID: parseInt(req.body.orderID - 1),
    nextOrderID: parseInt(req.body.orderID) + 1,
  };
  staffModel.staffDirectionUp(idObject);
};

exports.staffDirectionDown = (req, res) => {
  let idObject = {
    id: parseInt(req.body.id),
    currentOrderID: parseInt(req.body.orderID),
    prevOrderID: parseInt(req.body.orderID - 1),
    nextOrderID: parseInt(req.body.orderID) + 1,
  };
  staffModel.staffDirectionDown(idObject);
};

exports.resetStaffOrder = (req, res) => {
  staffModel.resetStaffOrder();
};
