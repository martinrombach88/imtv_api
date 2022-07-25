const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();

router.get("/getnews", newsController.getAllNews);
router.post("/postnews", newsController.postNews);
router.post("/deletenews", newsController.deleteNews);
module.exports = router;
