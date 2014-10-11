var expressHandlebars = require('express-hbs');

exports.setRoutes = function(app){

	app.get('/', function(req, res){
		//res.send('hello world');
		res.render('index', { title: 'Home'});
	});	

};
