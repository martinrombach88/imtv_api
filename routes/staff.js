const express = require("express");
const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/getstaff", staffController.getAllStaff);
router.post("/poststaff", staffController.postStaff);
router.post("/deletestaff", staffController.deleteStaff);
router.post("/updatestafforder", staffController.updateStaffOrder);

module.exports = router;
