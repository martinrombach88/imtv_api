const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();

router.get("/getnews", newsController.getAllNews);
// router.get("/addnews", newsController.addNews);

module.exports = router;
