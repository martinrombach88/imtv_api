const db = require("../util/database.js");
const express = require("express");
const newsList = require("../test_data/newsList");

exports.add = (newsItem) => {
  const bodyStringKR = newsItem.bodyKR.join();
  const bodyStringENG = newsItem.bodyENG.join();

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
    (newsItem.bodyKR ? "'" + bodyStringKR + "'" : "''") +
    ", " +
    (newsItem.bodyENG ? "'" + bodyStringENG + "'" : "''");

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
