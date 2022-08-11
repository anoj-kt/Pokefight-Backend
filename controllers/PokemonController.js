const PokemonList = require('../models/PokemonDatabase') 

const allPokemons = (req, res) => {
    PokemonList.find()
    .then((result) => res.send(result))
    .catch((err) => console.log('Error fetchin all pokemons: ' + err))
};

const onePokemon = (req, res) => {
    let pokeId = req.params.id;
    PokemonList.findOne({id: pokeId})
    .then((result) => res.send(result))
    .catch((err) => console.log('Error fetchin pokemon: ' + err))
    
};

const onePokemonInfo = (req, res) => {
    let pokeId = req.params.id;
    let info = req.params.info;

    PokemonList.findOne({id: pokeId})
    .then((result) => res.send(result[info]))
    .catch((err) => console.log('Error fetchin pokemon: ' + err))
};

module.exports = {
    allPokemons,
    onePokemon,
    onePokemonInfo
}