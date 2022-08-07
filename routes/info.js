const express = require("express");
const router = express.Router();
const pokemonlist = require("./pokemon.json");
/* GET pokemon listing. */
// let obj = JSON.stringify(pokemonlist);
router.get("/:id/:info", function (req, res, next) {
  const idpage = Number(req.params.id);
  let onepokemon = pokemonlist[idpage];

  res.send(Object.entries(onepokemon));
});
module.exports = router;
