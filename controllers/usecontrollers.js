const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

const { pokemonschema } = require("../models/post");
const { resultschema } = require("../models/results");
// const pokemonlist = require("../routes/pokemon.json");

//Declaration
const getid = async (req, res) => {
  let data = null;
  try {
    if (Number(req.params.id) > 0) {
      // const idpage = Number(req.params.id) - 1;
      // res.send(await JSON.stringify(pokemonlist[idpage].id));
      let filter = { id: Number(req.params.id) };
      data = await pokemonschema.findOne(filter);
      res.send(JSON.stringify(data.id));
      console.log(filter);
    } else {
      let message = "Id not found for : Id = " + idpage;
      res.send(message);
    }
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
    data = await pokemonschema.findOne(filter);
    if (info === "info") {
      res.send(await data);
    } else {
      let out = data[info.toString()];
      res.send(out);
    }
  } catch (err) {
    res.send(err.message);
  }
};
const getlist = async (req, res, next) => {
  try {
    await pokemonschema.find({}, (err, data) => res.send(data));
    res.send(await Object.entries(pokemonlist));
  } catch (err) {
    console.log(err.message);
  }
};
//post & put requests
const postSave = (req, res) => {
  const { winner, loser, score, date } = req.body;
  let test = resultschema.find({
    $and: [{ winner: { winner }, loser: { loser }, score: score, date: date }],
  });
  if (test) {
    console.log("already exists");
  }
  // if (test) {
  //   res.send("user already added");
  // } else {
  resultschema
    .create({
      //       // uid: new mongoose.Types.ObjectId(),
      winner: {
        name: winner.name,
        id: winner.id,
      },
      loser: {
        name: loser.name,
        id: loser.id,
      },
      score: score,
      date: date,
    })
    .then(function (newMessage) {
      res.send(newMessage);
    });
  // }
};

//Initialize
module.exports = {
  getid: getid,
  getinfo: getinfo,
  getlist: getlist,
  postSave: postSave,
  // putresults: putresults,
};
