const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/getwork", workController.getAllWork);
router.get("/getworkitem/:id", workController.getWorkItem);
router.post("/updatework", workController.updateWork);
router.post("/postwork", workController.postWork);
router.post("/deletework", workController.deleteWork);
router.post("/updateworkorder", workController.updateWorkOrder);
module.exports = router;
