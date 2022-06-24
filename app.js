const express = require("express");
const db = require("./util/database");
const app = express();
const bodyParser = require("body-parser");

const mediaRoutes = require("./routes/media");

// app.use(bodyParser.json()); //application/json

app.use(mediaRoutes);

app.listen(8080);
