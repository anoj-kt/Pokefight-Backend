//npm install express-async-handler --save
//npm install typescript --save
// const AsyncWrapper = require("../utilities/asyncwrapper").asyncWrapper;
//router.get('/', AsyncWrapper(async(req, res, next) {}));
const pokemonSchema = require("../models/post");
const pokemonlist = require("../routes/pokemon.json");
//Initializes

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
  } catch (err) {
    console.log(err.message);
  }
  return data;
};

const getinfo = async (req, res) => {
  let idpage = Number(req.params.id);
  let info = toString(req.params.info);
  let onepokemon = pokemonlist[idpage];
  // let filter = { id: Number(req.params.id)};
  let filter = { $and: [{ id: Number(req.params.id) }, { type: "type" }] };
  // $expr: {
  //   $and: [
  //     { id: idpage },
  //     {
  //       $or: [{ type: info }],
  //     },
  //   ],
  // },
  // };

  // {$project:{One:"$MainObj.One"}},
  //   {$project:{_id:0,One:1}}
  //$or: [{ base: info }, { type: info }, { name: info }]
  data = await pokemonSchema.findOne(filter);

  try {
    res.send(data);
    console.log(data);
  } catch (err) {
    res.send(err.message);
  }
  // if (info === "info") {
  //   res.send(await data);
  //   // console.log(getid());
  // } else {
  // const out = Object.keys(data).filter((key) => {
  //   return key.includes(info);
  // });
  // const result = out.reduce((obj, key) => {
  //   return Object.assign(obj, {
  //     [key]: onepokemon[key],
  //   });
  // }, {});
  // if (out.length === 0) {
  //   res.send("not found 404");
  // } else res.send(await result);
};

const getlist = async (req, res, next) => {
  try {
    await pokemonSchema.find({}, (err, data) => res.send(data));
    // res.send(await Object.entries(pokemonlist));
  } catch (err) {
    console.log(err.message);
  }
};

//Initialize
module.exports = {
  getid: getid,
  getinfo: getinfo,
  getlist: getlist,
};
