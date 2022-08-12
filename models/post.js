const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema(
  {
    _id: Number,
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

const pokemonschema = mongoose.model("pokemonlist", pokemonSchema);
module.exports = { pokemonschema };
