const express = require("express");
const homeController = require("../controllers/home");
const router = express.Router();
const s = "imtvapi.herokuapp.com";

router.get(s + "/getlogin", homeController.getLogin);

module.exports = router;
