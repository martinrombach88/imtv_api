const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();
const s = "imtvapi.herokuapp.com";

router.get(s + "/getnews", newsController.getAllNews);
router.get(s + "/getnewsitem/:id", newsController.getNewsItem);
router.post(s + "/addnews", newsController.addNews);
router.post(s + "/updatenews", newsController.updateNews);
router.post(s + "/deletenews", newsController.deleteNews);
module.exports = router;
