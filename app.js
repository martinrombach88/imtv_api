const express = require("express");
const db = require("./util/database");
const bodyParser = require("body-parser");
const mediaRoutes = require("./routes/media");
const newsRoutes = require("./routes/news");
const staffRoutes = require("./routes/staff");
const app = express();

app.use(bodyParser.json()); //application/json
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(mediaRoutes);
app.use(newsRoutes);
app.use(staffRoutes);
app.listen(8080);
