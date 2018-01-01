var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs  = require('express-handlebars');
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 3000;

var burger = require('./controllers/burger_controller.js');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// set handlbars.
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
	defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_controller.js');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);
// check the port are working
app.listen(PORT, function(err){
    if(err) throw err;
    console.log('Ears on port:%s ',  PORT);
});
