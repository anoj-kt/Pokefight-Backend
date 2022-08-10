const express = require("express");
const app = express();
app.use(express.json());
//npm install express-async-handler --save
//npm install typescript --save
// const AsyncWrapper = require("../utilities/asyncwrapper").asyncWrapper;
//router.get('/', AsyncWrapper(async(req, res, next) {}));
const { createLogicalAnd } = require("typescript");
const { pokemonSchema, resultsSchema } = require("../models/post");
// const pokemonlist = require("../routes/pokemon.json");

//Declaration
const getid = async (req, res) => {
  let data = null;
  try {
    if (Number(req.params.id) > 0) {
      // const idpage = Number(req.params.id) - 1;
      // res.send(await JSON.stringify(pokemonlist[idpage].id));
      let filter = { id: Number(req.params.id) };
      data = await pokemonSchema.findOne(filter);
      res.send(JSON.stringify(data.id));
    } else {
      let message = "Id not found for : Id = " + idpage;
      res.send(message);
    }
    //pokemon/id/info
  } catch (err) {
    console.log(err.message);
  }
  return data;
};

const getinfo = async (req, res) => {
  // let idpage = Number(req.params.id);
  let info = req.params.info;
  // let onepokemon = pokemonlist[idpage];
  let filter = { id: Number(req.params.id) };
  try {
    data = await pokemonSchema.findOne(filter);
    if (info === "info") {
      res.send(await data);
    } else {
      let out = Object.entries(data[info.toString()]);
      res.send(out);
    }
  } catch (err) {
    res.send(err.message);
  }
};
const getlist = async (req, res, next) => {
  try {
    await pokemonSchema.find({}, (err, data) => res.send(data));
    // res.send(await Object.entries(pokemonlist));
  } catch (err) {
    console.log(err.message);
  }
};
const postresult = async (req, res, next) => {};
//post requests

//Initialize
module.exports = {
  getid: getid,
  getinfo: getinfo,
  getlist: getlist,
  postresult: postresult,
  // putresults: putresults,
};
