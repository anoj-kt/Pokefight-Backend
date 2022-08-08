const router = require("../routes/info");
//npm install express-async-handler --save
//npm install typescript --save
const AsyncWrapper = require("../utilities/asyncwrapper").asyncWrapper;
//router.get('/', AsyncWrapper(async(req, res, next) {}));
const pokemonlist = require("../routes/pokemon.json");
module.exports = {
  getid: async (req, res, next) => {
    let idpage = null;
    try {
      Number(req.params.id) === 0
        ? (idpage = 0)
        : (idpage = Number(req.params.id) - 1);
      res.send(await JSON.stringify(pokemonlist[idpage].id));
    } catch (err) {
      console.log(err.message);
    }
  },
  getinfo: async (req, res, next) => {
    let idpage = Number(req.params.id);
    let info = req.params.info;
    let onepokemon = pokemonlist[idpage];
    try {
      if (info === "info") {
        res.send(await onepokemon);
      } else {
        const out = Object.keys(onepokemon).filter((key) => {
          return key.includes(info);
        });
        const result = out.reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: onepokemon[key],
          });
        }, {});
        if (out.length === 0) {
          res.send("not found 404");
        } else res.send(await result);
      }
    } catch (err) {
      console.log(err.message);
    }
  },
  getlist: async (req, res, next) => {
    try {
      res.send(await Object.entries(pokemonlist));
    } catch (err) {
      console.log(err.message);
    }
  },
};
