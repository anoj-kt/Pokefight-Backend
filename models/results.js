const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    id: Number,
    pokemon_one: Number,
    pokemon_two: Number,
    score: Number,
  },
  { collection: "results" }
);

const resultschema = mongoose.model("results", resultSchema);
module.exports = { resultschema };
