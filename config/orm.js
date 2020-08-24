// require connection
var connection = require("./connection");

//query functions
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (tableInput, val1, val2, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [tableInput, val1, val2], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function (val1, val2, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";

    connection.query(queryString, [tableInput, val1, val2], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
