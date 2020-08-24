// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8080;
// sets up Express app
var app = express();

// set ups express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("app/public"));

// set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set up routes
app.use(routes);

// Start our server
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
