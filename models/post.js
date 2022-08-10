const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema(
  {
    winner_id: Number,
    pokemon_one: Number,
    pokemon_two: Number,
    score: Number,
  },
  { collection: "results" }
);
module.exports = mongoose.model("results", resultsSchema);

const pokemonSchema = new Schema(
  {
    // String is shorthand for {type: String}
    // _id: Schema.Types.ObjectId,
    id: Number,
    name: {
      english: String,
      japanese: String,
      chinese: String,
      french: String,
    },
    type: [{ type: String }],
    base: {
      HP: Number,
      Attack: Number,
      Defense: Number,
      "Sp. Attack": Number,
      "Sp. Defense": Number,
      Speed: Number,
    },
  },
  { collection: "pokemonlist" }
);

module.exports = mongoose.model("pokemonlist", pokemonSchema);
