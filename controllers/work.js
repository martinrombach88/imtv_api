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

exports.updateWorkOrder = (req, res) => {
  workModel.updateWorkOrder(req.body);
};
