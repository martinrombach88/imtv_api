const db = require("../util/database.js");
const express = require("express");

exports.addNews = (req) => {
  const newsItem = req.body;
  const string =
    (newsItem.id ? "'" + newsItem.id + "'" : "''") +
    ", " +
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
    (newsItem[1] ? "'" + newsItem[1] + "'" : "''") +
    ", " +
    (newsItem[2] ? "'" + newsItem[2] + "'" : "''") +
    ", " +
    (newsItem[3] ? "'" + newsItem[3] + "'" : "''") +
    ", " +
    (newsItem[4] ? "'" + newsItem[4] + "'" : "''") +
    ", " +
    (newsItem[5] ? "'" + newsItem[5] + "'" : "''") +
    ", " +
    (newsItem[6] ? "'" + newsItem[6] + "'" : "''") +
    ", " +
    (newsItem[7] ? "'" + newsItem[7] + "'" : "''") +
    ", " +
    (newsItem[8] ? "'" + newsItem[8] + "'" : "''") +
    ", " +
    (newsItem[9] ? "'" + newsItem[9] + "'" : "''") +
    ", " +
    (newsItem[10] ? "'" + newsItem[10] + "'" : "''") +
    ", " +
    (newsItem[11] ? "'" + newsItem[11] + "'" : "''") +
    ", " +
    (newsItem[12] ? "'" + newsItem[12] + "'" : "''") +
    ", " +
    (newsItem[13] ? "'" + newsItem[13] + "'" : "''") +
    ", " +
    (newsItem[14] ? "'" + newsItem[14] + "'" : "''") +
    ", " +
    (newsItem.inProduction ? "'" + newsItem.inProduction + "'" : "''");

  if (newsItem.inProduction === "1") {
    db.execute("UPDATE news SET inProduction = 0");
    db.execute(
      "INSERT INTO news (id, image, imageLarge, dateKR, dateENG, titleKR, titleENG, bodyKR1, bodyKR2, bodyKR3, bodyKR4, bodyKR5, bodyKR6, bodyKR7, bodyENG1, bodyENG2, bodyENG3, bodyENG4, bodyENG5, bodyENG6, bodyENG7, inProduction) VALUES(" +
        string +
        ")"
    ).catch((err) => {
      console.log(err);
    });
  } else if (newsItem.inProduction === "0") {
    db.execute(
      "INSERT INTO news (id, image, imageLarge, dateKR, dateENG, titleKR, titleENG, bodyKR1, bodyKR2, bodyKR3, bodyKR4, bodyKR5, bodyKR6, bodyKR7, bodyENG1, bodyENG2, bodyENG3, bodyENG4, bodyENG5, bodyENG6, bodyENG7, inProduction) VALUES(" +
        string +
        ")"
    ).catch((err) => {
      console.log(err);
    });
  }
};

exports.getAllNews = () => {
  return db.execute("SELECT * FROM news ORDER BY id DESC");
};

exports.getNewsItem = (id) => {
  return db.execute("SELECT * FROM news WHERE id = " + id);
};

exports.updateNews = (newsItem) => {
  const idString = newsItem.id + "";
  console.log(newsItem);
  db.execute(
    "UPDATE news SET dateKR = '" +
      newsItem.dateKR +
      "', dateENG = '" +
      newsItem.dateENG +
      "', titleKR = '" +
      newsItem.titleKR +
      "', titleENG = '" +
      newsItem.titleENG +
      "', bodyKR1 = '" +
      newsItem[1] +
      "', bodyKR2 = '" +
      newsItem[2] +
      "', bodyKR3 = '" +
      newsItem[3] +
      "', bodyKR4 = '" +
      newsItem[4] +
      "', bodyKR5 = '" +
      newsItem[5] +
      "', bodyKR6 = '" +
      newsItem[6] +
      "', bodyKR7 = '" +
      newsItem[7] +
      "', bodyENG1 = '" +
      newsItem[8] +
      "', bodyENG2 = '" +
      newsItem[9] +
      "', bodyENG3 = '" +
      newsItem[10] +
      "', bodyENG4 = '" +
      newsItem[11] +
      "', bodyENG5 = '" +
      newsItem[12] +
      "', bodyENG6 = '" +
      newsItem[13] +
      "', bodyENG7 = '" +
      newsItem[14] +
      "', image = '" +
      newsItem.image +
      "', imageLarge = '" +
      newsItem.imageLarge +
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
