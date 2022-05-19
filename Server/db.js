// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'algodomain'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        process.exit();
    } else {
        console.log("database Connected");
    }
});

module.exports = { connection };