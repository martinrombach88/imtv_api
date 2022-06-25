const express = require("express");
const mediaController = require("../controllers/media");
const router = express.Router();

router.get("/getmedia", mediaController.getAllMedia);
// router.get("/addmedia", mediaController.addMedia);

module.exports = router;
