const express = require("express");
const router = express.Router();
const controller = require("../controllers/usecontrollers");
/* GET pokemon listing. */
// let obj = JSON.stringify(pokemonlist);
router.get("/:id/:info", controller.getinfo);
module.exports = router;
