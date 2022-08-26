const mongoose = require('mongoose');

const gameDataSchema = new mongoose.Schema({
    winner: String,
    loser: String
});

const GameData = mongoose.model('Game_data', gameDataSchema, 'Game_data');

module.exports = GameData;