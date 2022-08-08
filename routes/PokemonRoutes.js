const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/PokemonController')

router.get(['/', '/pokemon'], pokemonController.allPokemons);
router.get('/pokemon/:id', pokemonController.onePokemon);
router.get('/pokemon/:id/:info', pokemonController.onePokemonInfo);

module.exports = router;

