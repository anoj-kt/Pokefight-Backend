const express = require("express");
const router = express.Router();
const contr = require("../controllers/usecontrollers");
router.post("/:save", contr.postSave);
module.exports = router;
