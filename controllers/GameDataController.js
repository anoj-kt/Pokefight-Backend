const GameData = require('../models/GameDataSchema'); 

const leaderboard = (req, res) => {
    GameData.find()
    .then((result) => res.send(result))
    .catch((err) => console.log('Error fetchin all pokemons: ' + err))
}

const groupedData =  (req, res) => {
    GameData.aggregate([
        {
          $group: {
            _id: '$winner',
            count: { $sum: 1 }
          }
        }
      ])
    .then((result) => res.send(result))
    .catch((err) => console.log('Error fetchin groupe data ' + err)) 
}

module.exports = {
   leaderboard,
   groupedData
};