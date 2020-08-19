var connection = require("./connection");

var orm = {
  selectAll: function (tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: function (tableInput, val1, val2) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [tableInput, val1, val2], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: function (tableInput, val1, val2) {
    var queryString = "UPDATE ?? SET ? WHERE ?";

    connection.query(queryString, [tableInput, val1, val2], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
