// Set up MySQL connection.
var mysql = require("mysql");
// var pw = require("../pw");

if ((process.env, JAWSDB_URL)) {
  commection = mysqul.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "s7ffx5yrg1bs58i2",
    password: "lq6wh0ocv60kcisv",
    database: "ryh0pf6qa6x9bv7p",
  });
}

// connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db",
// });

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
