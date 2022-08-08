const express = require("express");
const router = express.Router();
const controller = require("../controllers/usecontrollers");
router.get("/", controller.getlist);
module.exports = router;
