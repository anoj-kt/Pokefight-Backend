const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
const logger = require("morgan");
const PORT = 8000;
require("dotenv").config();
const app = express();
const infoRouter = require("./routes/info");
const idRouter = require("./routes/id");
const listRouter = require("./routes/list");
const gamesaveRouter = require("./routes/gamesave");
const mongoose = require("mongoose");
var cors = require("cors");

//--middleware ------
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/pokemon", listRouter);
app.use("/pokemon/", idRouter);
app.use("/pokemon/", infoRouter);
// app.use("/game/", gamesaveRouter);

// const modelpost = require("./models/post");
app.use(cors({ origin: "*" }));
//-----Connection to mongodb-----
// connection works but was not able to display the database yes
mongoose.connect(process.env.PW_CONNECT);
const db = mongoose.connection;
//test connection status
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  res.send("Welcome to pokemon fight");
});
app.use((req, res) => {
  res.status(404).send("404");
});

//--- Server listeing -----
let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});

// module.exports = app;
