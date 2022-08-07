const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  winnder_id: Number,
  pokemon_one: Number,
  pokemon_two: Number,
  score: Number,
});
const modelresults = mongoose.model("results", resultsSchema);
module.exports = modelresults;

const postSchema = new Schema({
  // String is shorthand for {type: String}
  //  _id: Schema.Types.ObjectId,
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
});

const modelpost = mongoose.model("pokemonlist", postSchema);
module.exports = modelpost;
