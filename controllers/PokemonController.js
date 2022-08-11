const pokemonJson = require('../pokemon.json');
const pokemonList = require('../models/PokemonDatabase') 

const allPokemons = (req, res) => {
    res.send(pokemonJson)
};

const onePokemon = (req, res) => {
    let pokeId = req.params.id;

    if(pokeId > pokemonJson.length) {
        res.status(404).send('404');
    }

    pokemonJson.map(x => {
        if(x.id == pokeId){
            res.send(x);
        } 
    })
};

const onePokemonInfo = (req, res) => {
    let pokeId = req.params.id;
    let info = req.params.info;

    pokemonJson.map(x => {
        if(x.id == pokeId){
            res.send(x[info]);
        }
    })
};

module.exports = {
    allPokemons,
    onePokemon,
    onePokemonInfo
}