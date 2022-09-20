const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();

router.get("/getnews", newsController.getAllNews);
router.get("/getnewsitem/:id", newsController.getNewsItem);
router.post("/addnews", newsController.addNews);
router.post("/updatenews", newsController.updateNews);
router.post("/deletenews", newsController.deleteNews);

module.exports = router;
