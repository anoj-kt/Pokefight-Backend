const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const PORT = process.env.PORT || 8000;
require("dotenv").config();
const app = express();
const indexRouter = require("./routes/index");
const mongoose = require("mongoose");
//--middleware ------
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//-----Connection ------
const mongoDB =
  "mongodb+srv://chinchi42:hjLIpSPJpc3tv4vg@pokemon-data.lievjeq.mongodb.net/database?retryWrites=true&w=majority";
mongoose.connect(process.env.PW_CONNECT);

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const Schema = mongoose.Schema;
// mongoose.connect(process.env.PW_CONNECT);
//---check connection status---------

// const db  mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// const postSchema = new Schema({
//   // String is shorthand for {type: String}
//   // _id: Schema.Types.ObjectId,
//   id: Number,
// name: {
//   english: String,
//   japanese: String,
//   chinese: String,
//   french: String,
// },
// type: [
//   {
//     type: String,
//   },
// ],
// base: {
//   HP: Number,
//   Attack: Number,
//   Defense: Number,
//   "Sp. Attack": Number,
//   "Sp. Defense": Number,
//   Speed: Number,
// },
// });

// const pokemons = mongoose.model("pokemonlist", postSchema);
//----connection ende
// catch 404 and forward to error handler

// mongoose.connection.on("connecting", () => {
//   console.log("connecting");
//   console.log(mongoose.connection.readyState); //logs 2
// });
app.get("/", (req, res, next) => {
  res.send("Test");
  // pokemons.find({}, (err, data) => res.send(data));
});

// module.exports = client.connect;

//--- Server listeing -----
let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});

// module.exports = app;
