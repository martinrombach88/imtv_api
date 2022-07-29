const db = require("../util/database.js");
const express = require("express");
const newsList = require("../test_data/newsList");

exports.addNews = (req) => {
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

exports.getAllNews = () => {
  return db.execute("SELECT * FROM news");
};

exports.getNewsItem = (id) => {
  return db.execute("SELECT * FROM news WHERE id = " + id);
};

exports.updateNews = (newsItem) => {
  const idString = newsItem.id + "";

  db.execute(
    "UPDATE news SET dateKR = '" +
      newsItem.dateKR +
      "', dateENG = '" +
      newsItem.dateENG +
      "', titleKR = '" +
      newsItem.titleKR +
      "', titleENG = '" +
      newsItem.titleENG +
      "', bodyKR = '" +
      newsItem.bodyKR +
      "', bodyENG = '" +
      newsItem.bodyENG +
      "' WHERE id = '" +
      idString +
      "'"
  );
};

exports.deleteNews = (newsId) => {
  db.execute("DELETE FROM news WHERE id =" + newsId).catch((err) => {
    console.log(err);
  });
};
