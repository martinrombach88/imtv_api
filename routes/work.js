const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();
const s = "imtvapi.herokuapp.com";

router.get(s + "/getwork", workController.getAllWork);
router.get(s + "/getworkitem/:id", workController.getWorkItem);
router.post(s + "/updatework", workController.updateWork);
router.post(s + "/postwork", workController.postWork);
router.post(s + "/deletework", workController.deleteWork);
router.get(s + "/resetworkorder", workController.resetWorkOrder);
router.post(s + "/workdirectionup", workController.workDirectionUp);
router.post(s + "/workdirectiondown", workController.workDirectionDown);
module.exports = router;
