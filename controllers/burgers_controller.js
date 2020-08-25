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
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burgers.update(req.body.burger_id, function (result) {
    res.redirect("/");
  });
});

module.exports = router;
