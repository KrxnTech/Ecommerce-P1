
const mysql = require("mysql2"); // REQUIRES THE MYSQL2 PACKAGE

// CREATE A CONNECTION POOL
const pool = mysql
  .createPool({
    host: process.env.DB_HOST, // HOST
    user: process.env.DB_USER, // USER
    password: process.env.DB_PASS, // PASSWORD
    database: process.env.DB_NAME, // DATABASE
    waitForConnections: true, // WAIT FOR CONNECTIONS
    connectionLimit: 10, // CONNECTION LIMIT
    queueLimit: 0, // QUEUE LIMIT
  })
  .promise(); // PROMISE

module.exports = pool; // EXPORT THE POOL 
