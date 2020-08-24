var express = require("express");
var burgers = require("../modes/model-burgers");
var router = express.Router();

// Routes

router.get("/", function (req, res) {
  burgers.selectAll({}).then(function (results) {
    res.json(results);
  });
});

router.post("api/burgers", function (req, res) {
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

router.post("api/burgers", function (req, res) {
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

router.put("api/burgers/:id", function (req, res) {
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

module.exports = router;
