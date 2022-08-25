const express = require("express");
const homeModel = require("../models/home");

exports.getLogin = (req, res, next) => {
  homeModel
    .getLogin()
    .then(([login]) => {
      res.status(200).json({
        login,
      });
    })
    .catch((err) => console.log(err));
};
