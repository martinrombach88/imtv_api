const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("imtvapi.herokuapp.com/getwork", workController.getAllWork);
router.get("/getworkitem/:id", workController.getWorkItem);
router.post("/updatework", workController.updateWork);
router.post("/postwork", workController.postWork);
router.post("/deletework", workController.deleteWork);
router.get("/resetworkorder", workController.resetWorkOrder);
router.post("/workdirectionup", workController.workDirectionUp);
router.post("/workdirectiondown", workController.workDirectionDown);
module.exports = router;
