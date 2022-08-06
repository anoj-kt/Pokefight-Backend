var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//-Routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//-----------Server handler ------
// module.exports = client.connect;
let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});

// module.exports = app;
