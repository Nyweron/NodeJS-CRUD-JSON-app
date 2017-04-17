var express = require('express');
var app = express();
var fs = require("fs");

var obj = {
    table: []
};

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
});

var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

fs.readFile('users.json', 'utf8', function(err, data) {
    if (err) {
        return console.error(err);
    }

    console.log("Asynchronous read: " + data.toString());
    var obj = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
});