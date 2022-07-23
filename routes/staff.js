const express = require("express");
const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/getstaff", staffController.getAllStaff);
router.post("/poststaff", staffController.postStaff);

module.exports = router;
