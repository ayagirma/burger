//Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.
var orm = require('../config/orm.js');

var burger ={
	selectAll: function(cb) {
		orm.SelectAll('burger', function(res){
			cb(res);
		});
	},
	createOne: function(cols, vals, cb){
		orm.createOne('burger', cols, vals, function(res){
			cb(res);
		});
	},
	updateOne: function(objColVals, condition,cb){
		orm.updateOne('burger', objColVals,condition,function(res){
			cb(res);
		});
	}

};
module.exports = burger;