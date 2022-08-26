const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/PokemonController');
const GameDataController = require('../controllers/GameDataController')

router.get(['/', '/pokemon'], pokemonController.allPokemons);
router.get('/pokemon/:id', pokemonController.onePokemon);
router.get('/pokemon/:id/:info', pokemonController.onePokemonInfo);
router.get('/game', GameDataController.leaderboard);
router.get('/gamegroup', GameDataController.groupedData);



module.exports = router;

