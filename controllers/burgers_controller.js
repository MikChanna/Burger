var express = require("express");
var burgers = require("../modes/model-burgers");

// sets up Express app
var app = express();

// set ups express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static("app/public"));

// Routes

app.get("/", function (req, res) {
  burgers.selectAll({}).then(function (results) {
    res.json(results);
  });
});

app.post("api/burgers", function (req, res) {
  burgers
    .insertOne({
      where: {
        burger_name: req.params.name,
        devoured: false,
      },
    })
    .then(function (results) {
      res.json(results);
    });
});

app.post("api/burgers", function (req, res) {
  burgers
    .insertOne({
      where: {
        burger_name: req.params.name,
        devoured: false,
      },
    })
    .then(function (results) {
      res.json(results);
    });
});

app.put("api/burgers/:id", function (req, res) {
  burgers
    .insertOne({
      where: {
        burger_name: req.params.name,
        devoured: false,
      },
    })
    .then(function (results) {
      res.json(results);
    });
});
