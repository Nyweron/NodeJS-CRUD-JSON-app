var express = require('express');
var app = express();
var fs = require("fs");
var JsonDB = require('node-json-db');

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


app.get('/addUsers', function(req, res) {
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
});


var db = new JsonDB("table.json", true, false);


var data = db.getData("/");
console.log(data);
db.push("table.json/table[]", { id: 6, squere: 556 }, true);

console.log(db);


// fs.readFile('table.json', 'utf8', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//     var obj = JSON.parse(data);

//     //try get last id from obj.

//     obj.table.push({ id: 11, square: 20 });
//     var json = JSON.stringify(obj);
//     fs.writeFile('table.json', json, 'utf8');
// });
//});