//Import (require) Mysql connection
var connection = require("./connection.js");
function printQuestionMarks(num){
	var arr=[];

	for (var i=0;i<num;i++){
		arr.push("?");
	}
	return arr.toString();
}
function objToSql(ob){
	var arr = [];
	// loop through the keys and push the key/value as a string int arr
	for(var key in ob){
		var value = ob[key];
		//check to step hidden properties
		if(object.hasOwnProperty.call(ob, key)){
			// if string with spaces, add quotations
			if(typeof value === " string " && value.indexOF("")>=0){
				value=" '" +value+ " '; "
			}
			arr.push(key + "=" +value);
		}
	}
	return arr.toString();
}

//object for all our SQL statement functions.
var orm ={
	SelectAll:function(tableInput, cb){
		var queryString = " SELECT * FROM " + tableInput + ";"
		connection.query(queryString, function(err,result){
			if(err){
				throw err;
			}
			cb(result);
			//console.log(result);
		});
	},
	// vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
	createOne: function(tableInput,cols,vals,cb){
		var queryString = "INSERT INTO " + tableInput;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);
		console.log(vals);
		connection.query(queryString, vals, function(err, result) {
			if(err){
				throw err;
			}
			cb(result);
		});
console.log(" it works! ");
	},
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
	updateOne: function(table,objColVals,condition,cb){
		var queryString = " UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
		

		console.log(queryString);
		connection.query(queryString, vals, function(err, result) {
			if(err){
				throw err;
			}
			cb(result);
		});

	}	
};
// export the orm object for the model(burger.js)
module.exports = orm;

