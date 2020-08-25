// require orm
var orm = require("../config/orm.js");

// calling orm functions
var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (val1, condition, cb) {
    orm.insertOne("burgers", val1, condition, function (res) {
      cb(res);
    });
  },

  updateOne: function (val1, condition, cb) {
    orm.updateOne("burgers", val1, condition, cb, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
