const pokemonSchema = require("../models/post");

const World = (req, res) => {
  const str = "World";
  return str;
};
const Hello = (req, res) => {
  res.send("Hello " + World());
};

module.exports = {
  Hello: Hello,
  World: World,
};
