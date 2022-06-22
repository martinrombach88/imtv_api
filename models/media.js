const db = require("../util/database.js");

const getMedia = db
  .execute("SELECT * FROM media")
  .then((result) => {
    console.log("hello from the model");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = getMedia;
