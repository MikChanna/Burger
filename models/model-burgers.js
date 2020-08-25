// require orm
var orm = require("../config/orm.js");

// calling orm functions
var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (name, cb) {
    orm.insertOne("burgers", name, function (res) {
      cb(res);
    });
  },

  updateOne: function (id, cb) {
    orm.updateOne("burgers", id, cb, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
