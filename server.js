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

// fs.readFile('table.json', 'utf8', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Asynchronous read: " + data.toString());
//     var obj = JSON.parse(data);
//     obj.table.push({ id: 11, square: 20 });
//     var json = JSON.stringify(obj);
//     fs.writeFile('table.json', json, 'utf8');
// });

fs.readFile('table.json', 'utf8', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    var obj = JSON.parse(data);
    obj.table.push({ id: 11, square: 20 });
    var json = JSON.stringify(obj);
    fs.writeFile('table.json', json, 'utf8');
});