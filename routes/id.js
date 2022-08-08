const express = require("express");
const router = express.Router();
/* GET pokemon listing. */
const controller = require("../controllers/usecontrollers");
router.get("/:id", controller.getid);
module.exports = router;
