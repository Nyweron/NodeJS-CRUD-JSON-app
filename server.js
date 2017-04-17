var express = require('express');
var app = express();
var fs = require("fs");


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






fs.readFile('users.json', 'utf8', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    var obj = JSON.parse(data);
    obj.user10 = ({
        "name": "mohit4",
        "password": "password6",
        "profession": "teacher",
        "id": 8
    });
    var json = JSON.stringify(obj);
    fs.writeFile('users.json', json, 'utf8');
});