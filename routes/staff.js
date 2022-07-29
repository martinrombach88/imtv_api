const express = require("express");
const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/getstaff", staffController.getAllStaff);
router.get("/getstaffitem/:id", staffController.getStaffItem);
router.post("/poststaff", staffController.addStaff);
router.post("/updatestaff", staffController.updateStaff);
router.post("/deletestaff", staffController.deleteStaff);
router.post("/updatestafforder", staffController.updateStaffOrder);

module.exports = router;
