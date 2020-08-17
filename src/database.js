const mysql = require('mysql');
const { promisify } = require('util');
const {database} = require("./keys");
const pool = mysql.createPool(database);
pool.getConnection((err,connection)=>{
  if(err){
    switch(err.code){
      case "PROTOCOL_CONNECTION_LOST": console.log("DATABASE CONNECTION WAS CLOSED");
      case "ER_CON_COUNT_ERROR": console.log("DATABASE HAS TO MANY CONNECTIONS");
      case "ECONNREFUSED": console.log("DATABASE CONNECTION WAS REFUSED");
      default: console.log(err.code);
    }
  }
  if(connection) connection.release();
  console.log('Conexion a la base de datos');
  return;
});

// convirtiendo callbacks a promesas

pool.query = promisify(pool.query);

module.exports = pool;