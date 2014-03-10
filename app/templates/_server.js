var path = require('path'); 
var express = require('express');
require('pretty-monitor').start();


var app = module.exports = express();

app._initialize = function(config)/*@PostConstruct @Autowired*/{
	
    // all environments
	app.set('port', process.env.PORT || config.port);
	
	app.set('view engine', 'jade');
	

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	
	
	app.use(app.router);
	app.use(express.static('public'));


	// development only
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}
};


