var express = require("express");
var burgers = require("../models/model-burgers");
var router = express.Router();

// Routes

router.get("/", function (req, res) {
  burgers.all(function (data) {
    var burgername = {
      burger_name: data,
    };
    res.render("index", burgername);
  });
});

router.post("api/burgers", function (req, res) {
  burgers.insertOne({
    where: {
      burger_name: req.params.name,
      devoured: false,
    },
  })(function (results) {
    res.json(results);
  });
});

router.post("api/burgers", function (req, res) {
  burgers.insertOne({
    where: {
      burger_name: req.params.name,
      devoured: false,
    },
  })(function (results) {
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
