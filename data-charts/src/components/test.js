var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.3.99:13306',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});