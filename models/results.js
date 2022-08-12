const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  // id: { type: mongoose.Schema.Types.ObjectId },
  winner: {
    name: String,
    id: Number,
  },
  loser: {
    name: String,
    id: Number,
  },
  score: Number,
  date: String, //actual date
});

const resultschema = mongoose.model("results", resultSchema);
module.exports = { resultschema };

//most recent played
//board
