const db = require("../util/database.js");
const express = require("express");

exports.postWork = (workItem) => {
  const string =
    (workItem.body.id ? "'" + workItem.body.id + "'" : "''") +
    ", " +
    (workItem.body.titleKR ? "'" + workItem.body.titleKR + "'" : "''") +
    ", " +
    (workItem.body.titleENG ? "'" + workItem.body.titleENG + "'" : "''") +
    ", " +
    (workItem.body.image ? "'" + workItem.body.image + "'" : "''") +
    ", " +
    (workItem.body.imageTall ? "'" + workItem.body.imageTall + "'" : "''") +
    ", " +
    (workItem.body.clipVid ? "'" + workItem.body.clipVid + "'" : "''") +
    ", " +
    (workItem.body.fullVid ? "'" + workItem.body.fullVid + "'" : "''") +
    ", " +
    (workItem.body.channels ? "'" + workItem.body.channels + "'" : "''") +
    ", " +
    (workItem.body.releaseDate ? "'" + workItem.body.releaseDate + "'" : "''") +
    ", " +
    (workItem.body.producerKR ? "'" + workItem.body.producerKR + "'" : "''") +
    ", " +
    (workItem.body.writerKR ? "'" + workItem.body.writerKR + "'" : "''") +
    ", " +
    (workItem.body.starringKR ? "'" + workItem.body.starringKR + "'" : "''") +
    ", " +
    (workItem.body.descriptionKR
      ? "'" + workItem.body.descriptionKR + "'"
      : "''") +
    ", " +
    (workItem.body.producerENG ? "'" + workItem.body.producerENG + "'" : "''") +
    ", " +
    (workItem.body.writerENG ? "'" + workItem.body.writerENG + "'" : "''") +
    ", " +
    (workItem.body.starringENG ? "'" + workItem.body.starringENG + "'" : "''") +
    ", " +
    (workItem.body.descriptionENG
      ? "'" + workItem.body.descriptionENG + "'"
      : "''") +
    ", " +
    (workItem.body.subTitleKR ? "'" + workItem.body.subTitleKR + "'" : "''") +
    ", " +
    (workItem.body.subTitleENG ? "'" + workItem.body.subTitleENG + "'" : "''") +
    ", " +
    (workItem.body.color ? "'" + workItem.body.color + "'" : "''") +
    ", " +
    (workItem.body.backgroundColor
      ? "'" + workItem.body.backgroundColor + "'"
      : "''") +
    ", " +
    (workItem.body.inProduction
      ? "'" + workItem.body.inProduction + "'"
      : "''");

  if (workItem.body.inProduction === "1") {
    db.execute("UPDATE work SET inProduction = 0");
    db.execute(
      "INSERT INTO work (id, titleKR, titleENG, image, imageTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR, subTitleENG, color, backgroundColor, inProduction) VALUES(" +
        string +
        ")"
    ).catch((err) => {
      console.log(err);
    });
  } else if (workItem.body.inProduction === "0") {
    db.execute(
      "INSERT INTO work (id, titleKR, titleENG, image, imageTall, clipVid, fullVid, channels, releaseDate, producerKR, writerKR, starringKR, descriptionKR, producerENG, writerENG, starringENG, descriptionENG, subTitleKR, subTitleENG, color, backgroundColor, inProduction) VALUES(" +
        string +
        ")"
    ).catch((err) => {
      console.log(err);
    });
  }
};

exports.updateWork = (workItem) => {
  const idString = workItem.id + "";
  db.execute(
    "UPDATE work SET titleKR = '" +
      workItem.titleKR +
      "', descriptionKR ='" +
      workItem.descriptionKR +
      "', channels ='" +
      workItem.channels +
      "', releaseDate ='" +
      workItem.releaseDate +
      "', producerKR ='" +
      workItem.producerKR +
      "', writerKR ='" +
      workItem.writerKR +
      "', titleENG ='" +
      workItem.titleENG +
      "', descriptionENG ='" +
      workItem.descriptionENG +
      "', producerENG ='" +
      workItem.producerENG +
      "',  writerENG ='" +
      workItem.writerENG +
      "', starringENG ='" +
      workItem.starringENG +
      "', fullVid ='" +
      workItem.fullVid +
      "', clipVid ='" +
      workItem.clipVid +
      "', subTitleKR ='" +
      workItem.subTitleKR +
      "', subTitleENG ='" +
      workItem.subTitleENG +
      "', color ='" +
      workItem.color +
      "', backgroundColor ='" +
      workItem.backgroundColor +
      "', image ='" +
      workItem.image +
      "', imageTall ='" +
      workItem.imageTall +
      "' WHERE id = '" +
      idString +
      "'"
  );

  if (workItem.inProduction === "1") {
    db.execute(
      "UPDATE work SET inProduction=0 WHERE NOT id='" + idString + "'"
    );
    db.execute("UPDATE work SET inProduction=1 WHERE id = '" + idString + "'");
  }
};

exports.getAll = () => {
  return db.execute("SELECT * FROM work ORDER BY orderID ");
};

exports.getWorkItem = (id) => {
  return db.execute("SELECT * FROM work WHERE id = " + id);
};

exports.deleteWork = (workId) => {
  db.execute("DELETE FROM work WHERE id =" + workId).catch((err) => {
    console.log(err);
  });
};

exports.resetWorkOrder = () => {
  for (let i = 0; i < 50; i++) {
    db.execute("UPDATE work SET orderID ='" + i + "' WHERE id = " + i);
  }
};

exports.workDirectionChange = (object) => {
  for (let entry in object) {
    db.execute(
      "UPDATE work SET orderID = " +
        object[entry].orderID +
        " WHERE id = " +
        object[entry].id
    );
  }
};
