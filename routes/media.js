const express = require("express");
const mediaController = require("../controllers/media");
const router = express.Router();

router.get("/media", mediaController.getMedia);

module.exports = router;
