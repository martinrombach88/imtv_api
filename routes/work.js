const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/getwork", workController.getAllWork);
router.post("/postwork", workController.postWork);

module.exports = router;
