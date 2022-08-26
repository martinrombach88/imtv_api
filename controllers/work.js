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
  let newObject = req.body.fullObject;

  for (let object in req.body.fullObject) {
    if (parseInt(req.body.idObject.orderID) === 1) {
      return;
    } else if (
      req.body.fullObject[object].orderID ===
      parseInt(req.body.idObject.orderID)
    ) {
      newObject[object].orderID--;
    } else if (
      req.body.fullObject[object].orderID ===
      parseInt(req.body.idObject.orderID) - 1
    ) {
      newObject[object].orderID++;
    }
  }

  workModel.workDirectionChange(newObject);
};

exports.workDirectionDown = (req, res) => {
  let newObject = req.body.fullObject;

  for (let object in req.body.fullObject) {
    if (
      req.body.fullObject[object].orderID ===
      parseInt(req.body.idObject.orderID)
    ) {
      newObject[object].orderID++;
    } else if (
      req.body.fullObject[object].orderID ===
      parseInt(req.body.idObject.orderID) + 1
    ) {
      newObject[object].orderID--;
    }
  }

  workModel.workDirectionChange(newObject);
};

exports.resetWorkOrder = (req, res) => {
  workModel.resetWorkOrder();
};
