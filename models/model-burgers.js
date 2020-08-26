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
    orm.insertOne("burgers", name, cb);
  },

  updateOne: function (id, cb) {
    orm.updateOne("burgers", id, cb);
  },

  deleteOne: function (id, cb) {
    orm.deleteOne("burgers", id, cb);
  },
};

module.exports = burgers;
