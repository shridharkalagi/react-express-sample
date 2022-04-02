'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'password',
    database : 'test'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;