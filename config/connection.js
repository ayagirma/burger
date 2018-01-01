
//create a connection
var mysql = require('mysql');
var connection = mysql.createConnection({
	  host: "localHost",
	  user: "root",
	  password: "Honda@13",
	  database: "burger_db"
  });
connection.connect(function(err) {
    if (err)throw err;
    
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
