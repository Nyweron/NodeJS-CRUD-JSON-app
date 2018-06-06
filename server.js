var express = require("express");
var app = express();
var fs = require("fs");
var JsonDB = require("node-json-db");
var bodyParser = require("body-parser");

const jsonFileName = "name.json";
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var server = app.listen(8081, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});

app.get("/list", function(req, res) {
  fs.readFile(__dirname + "/" + jsonFileName, "utf8", function(err, data) {
    res.end(data);
  });
});

app.post("/addName", urlencodedParser, function(req, res) {
  // Prepare output in JSON format
  response = {
    name: req.body.name,
    lastName: req.body.lastName
  };

  let db = new JsonDB(jsonFileName, true, false);
  db.push(
    jsonFileName + "/names[]",
    { id: Math.floor(Math.random() * 100000) ,name: response.name, lastName: response.lastName },
    true
  );

  res.end(JSON.stringify(db));
});

app.use(express.static("public"));
app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
