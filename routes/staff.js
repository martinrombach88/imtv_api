const express = require("express");
const staffController = require("../controllers/staff");
const router = express.Router();
const s = "imtvapi.herokuapp.com";

router.get(s + "/getstaff", staffController.getAllStaff);
router.get(s + "/getstaffitem/:id", staffController.getStaffItem);
router.post(s + "/poststaff", staffController.addStaff);
router.post(s + "/updatestaff", staffController.updateStaff);
router.post(s + "/deletestaff", staffController.deleteStaff);
router.get(s + "/resetstafforder", staffController.resetStaffOrder);
router.post(s + "/staffdirectionup", staffController.staffDirectionUp);
router.post(s + "/staffdirectiondown", staffController.staffDirectionDown);

module.exports = router;
