
// Create the router for the app, and export the router at the end of your file.
var express=require("express");
var router=express.Router();
var burger = require("../models/burger.js");

// create all routes and set up logic within those routers that required.
router.get('/', function(req,res){
	//console.log("hello");

	burger.selectAll(function(data){
		var hbsObject = {burger: data};
		res.render('index', hbsObject);
		//console.log(hbsObject);
	});
});

router.post("/api/burger",function(req,res){
	console.log(req.body);
	burger.createOne(["burger_name"], [req.body.name], function(result){

			res.json({ id:result.insertId });
		});

});
router.post('/api/burger/:id', function(req,res){
	var condition = "id = " + req.params.id;
	console.log('condition', condition);

	
		burger.updateOne({devoured:req.body.devoured}, condition, function(result){ 
			if(result.changedRows ==0){
				// if no rows were changed, then the id must not exist, so 404
				return res.status(404).end();
			}else{
				res.status(200).end();
			}
		});
});
module.exports = router;
