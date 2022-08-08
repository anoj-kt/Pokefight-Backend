const express = require("express");
const router = express.Router();
const pokemonlist = require("./pokemon.json");
/* GET pokemon listing. */
let obj = JSON.stringify(pokemonlist);
router.get("/:id", function (req, res, next) {
  let idpage = null;
  Number(req.params.id) === 0
    ? (idpage = 0)
    : (idpage = Number(req.params.id) - 1);

  res.send(pokemonlist[idpage].id);
});
module.exports = router;
