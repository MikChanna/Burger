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

  insertOne: function (tableInput, val1, cb) {
    connection.query(
      "INSERT INTO " + tableInput + "(burger_name) VALUES ('" + val1 + "');",
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  updateOne: function (tableInput, condition, cb) {
    connection.query(
      "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";",
      function (err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
