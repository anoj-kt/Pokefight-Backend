const express = require("express");
const router = express.Router();
const pokemonlist = require("./pokemon.json");
/* GET pokemon listing. */
// let obj = JSON.stringify(pokemonlist);

router.get("/", function (req, res, next) {
  res.send(Object.entries(pokemonlist));
});

module.exports = router;
