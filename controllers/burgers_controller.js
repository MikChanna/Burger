var express = require("express");
var burgers = require("../models/model-burgers");
var router = express.Router();

// Routes

router.get("/", function (req, res) {
  burgers.all(function (data) {
    var burgerdata = {
      burgers: data,
    };
    res.render("index", burgerdata);
  });
});

router.post("/api/burgers", function (req, res) {
  burgers.insertOne([req.body.burger_name], function (result) {
    res.json({ result });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {}
  );
});

module.exports = router;
