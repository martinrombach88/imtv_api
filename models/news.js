const db = require("../util/database.js");
const express = require("express");
const newsList = require("../test_data/newsList");

exports.post = (req) => {
  const newsItem = req.body;
  const string =
    (newsItem.image ? "'" + newsItem.image + "'" : "''") +
    ", " +
    (newsItem.imageLarge ? "'" + newsItem.imageLarge + "'" : "''") +
    ", " +
    (newsItem.dateKR ? "'" + newsItem.dateKR + "'" : "''") +
    ", " +
    (newsItem.dateENG ? "'" + newsItem.dateENG + "'" : "''") +
    ", " +
    (newsItem.titleKR ? "'" + newsItem.titleKR + "'" : "''") +
    ", " +
    (newsItem.titleENG ? "'" + newsItem.titleENG + "'" : "''") +
    ", " +
    (newsItem.bodyKR ? "'" + newsItem.bodyKR + "'" : "''") +
    ", " +
    (newsItem.bodyENG ? "'" + newsItem.bodyENG + "'" : "''");

  //This is asyncronous. Anything that calls it needs to be async.
  db.execute(
    "INSERT INTO news (image, imageLarge, dateKR, dateENG, titleKR, titleENG, bodyKR, bodyENG) VALUES(" +
      string +
      ")"
  ).catch((err) => {
    console.log(err);
  });
};

exports.getAll = () => {
  return db.execute("SELECT * FROM news");
};
