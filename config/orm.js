// require connection
var connection = require("./connection");

//query functions
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (tableInput, val1, condition, cb) {
    var queryString = "INSERT INTO ?? VALUES ? ?";
    connection.query(queryString, [tableInput, val1, condition], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function (val1, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";

    connection.query(queryString, [tableInput, val1, condition], function (
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
