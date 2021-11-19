var mysql = require('mysql2');

var conexion = mysql.createConnection({
host: 'localhost',
database:'test',
user:'gburucua',
password:'password'
});

conexion.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
  module.exports = conexion;