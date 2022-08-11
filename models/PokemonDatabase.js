const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    id: Number,
    name: {
        english: String,
        japanese: String,
        chinese: String,
        french: String
    },
    type: [String],
    base: {
        HP: Number,
        Attack: Number,
        Defense: Number,
        Sp: {
            Attack: Number,
            Defense: Number
        },
        Speed: Number
    }
});

const PokemonList = mongoose.model('pokemon_list', pokemonSchema, 'pokemon_list');

module.exports = PokemonList;