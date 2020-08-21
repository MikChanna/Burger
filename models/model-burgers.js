var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (val1, val2, cb) {
    orm.insertOne("burgers", val1, val2, function (res) {
      cb(res);
    });
  },

  updateOne: function (val1, val2, cb) {
    orm.updateOne("burgers", val1, val2, cb, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
