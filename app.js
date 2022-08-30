const express = require("express");
const db = require("./util/database");
const bodyParser = require("body-parser");
const workRoutes = require("./routes/work");
const newsRoutes = require("./routes/news");
const staffRoutes = require("./routes/staff");
const homeRoutes = require("./routes/home");
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(homeRoutes);
app.use(workRoutes);
app.use(newsRoutes);
app.use(staffRoutes);

app.listen(port);
