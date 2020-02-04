var PORT = process.env.PORT || 3306;
var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static("public"));
var path = require("path");
var http = require("http");
var server = http.Server(app);

//DB Credentials
var connection = mysql.createConnection({
  host: "remotemysql.com",
  user: "3p5jNBnwhk",
  password: "aQDdkJnzLF",
  database: "3p5jNBnwhk"
});

// Check Database connection
connection.connect(function(error) {
  if (!error) {
    console.log("Connection Successful!");
  } else console.log("Connection Failed!");
});

app.get("/", function(req, resp) {
  //Mysql Queries Go here
  resp.sendFile(__dirname + "/index.html"); //Heroku Shit
});
app.get("/action_page", function(req, resp) {
  //Mysql Queries Go here
  console.log("Get method Successful!");
  ///
  connection.query(
    "Insert into xx_project_student values ('" +
      req.query.firstname +
      "','" +
      req.query.lastname +
      "','" +
      req.query.Address +
      "')",
    function(error, rows, fields) {
      if (!error) {
        console.log(
          " Data inserted for: " +
            req.query.firstname +
            " " +
            req.query.lastname
        );
        // console.log("Name Added Succesfully!");
      } else {
        console.log("Query Failed! " + error);
      }
    }
  );
  resp.sendFile(__dirname + "/index.html");
  ///
});

app.get("/search", function(req, resp) {
  //Mysql Queries Go here
  console.log("Search method Successful!");
  ///
  connection.query(
    "Select * from xx_project_student where upper(firstname) like  UPPER('%" +
      req.query.searchbox +
      "%') or upper(lastname) like  UPPER('%" +
      req.query.searchbox +
      "%') or upper(address) like  UPPER('%" +
      req.query.searchbox +
      "%')",
    function(error, rows, fields) {
      if (!error) {
        console.log(" Data queried for: " + req.query.searchbox);
        console.log(rows);
        resp.json(rows);
      } else {
        console.log("Query Failed! " + error);
      }
    }
  );
  // resp.sendFile(__dirname + "/index.html");
  ///
});

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
}); //Port number given here
