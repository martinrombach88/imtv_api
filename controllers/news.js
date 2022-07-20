const express = require("express");
const newsModel = require("../models/news");
const newsList = require("../test_data/newsList");

exports.getAllNews = (req, res, next) => {
  newsModel
    .getAll()
    .then(([newsItems]) => {
      res.status(200).json({
        newsItems,
      });
    })
    .catch((err) => console.log(err));
};

exports.postNews = (req, res, next) => {
  newsModel.post(req);
};
