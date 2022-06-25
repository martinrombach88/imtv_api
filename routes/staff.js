const express = require("express");
const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/getstaff", staffController.getAllStaff);
// router.get("/addstaff", staffController.add);

module.exports = router;
