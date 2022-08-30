const express = require("express");
const newsModel = require("../models/news");

exports.getAllNews = (req, res, next) => {
  newsModel
    .getAllNews()
    .then(([newsItems]) => {
      res.status(200).json({
        newsItems,
      });
    })
    .catch((err) => console.log(err));
};

exports.getNewsItem = (req, res, next) => {
  newsModel
    .getNewsItem(req.params.id)
    .then(([newsItem]) => {
      res.status(200).json({
        newsItem,
      });
    })
    .catch((err) => console.log(err));
};

exports.addNews = (req, res, next) => {
  newsModel.addNews(req);
};

exports.updateNews = (req, res, next) => {
  newsModel.updateNews(req.body);
};

exports.deleteNews = (req, res) => {
  newsModel.deleteNews(req.body.id);
};
