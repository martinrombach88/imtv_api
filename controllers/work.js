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

exports.getWorkItem = (req, res, next) => {
  workModel
    .getWorkItem(req.params.id)
    .then(([workItem]) => {
      res.status(200).json({
        workItem,
      });
    })
    .catch((err) => console.log(err));
};

exports.postWork = (req) => {
  workModel.postWork(req);
};

exports.updateWork = (req) => {
  workModel.updateWork(req.body);
};

exports.deleteWork = (req, res) => {
  workModel.deleteWork(req.body.id);
};

exports.workDirectionUp = (req, res) => {
  let idObject = {
    id: parseInt(req.body.id),
    currentOrderID: parseInt(req.body.orderID),
    prevOrderID: parseInt(req.body.orderID - 1),
    nextOrderID: parseInt(req.body.orderID) + 1,
  };
  workModel.workDirectionUp(idObject);
};

exports.workDirectionDown = (req, res) => {
  let idObject = {
    id: parseInt(req.body.id),
    currentOrderID: parseInt(req.body.orderID),
    prevOrderID: parseInt(req.body.orderID - 1),
    nextOrderID: parseInt(req.body.orderID) + 1,
  };
  workModel.workDirectionDown(idObject);
};

exports.resetWorkOrder = (req, res) => {
  workModel.resetWorkOrder();
};
