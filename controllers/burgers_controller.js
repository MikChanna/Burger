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
    res.json(result);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burgers.updateOne(req.body.devoured, function (result) {
    res.json(result);
  });
});

// router.put("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);
//   console.log(req.body.devoured);

//   burgers.updateOne(
//     {
//       devoured: req.body.devoured,
//     },
//     condition,
//     function (result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     }
//   );
// });

module.exports = router;
