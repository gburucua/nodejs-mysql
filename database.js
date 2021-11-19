// Configure database connection
const mysql = require('mysql2');
require('dotenv').config();

var conexion = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});

conexion.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
  module.exports = conexion;