
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "y0qeybxg2q0vvq6a",
    password: "rzgxmpaogmoo0uht",
    database: "hvr0cf04170v6m8c"
  });
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;

