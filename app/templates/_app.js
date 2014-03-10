/*jshint node:true*/
"use strict";

var http = require('http');
var express = require('express');
var wire = require('wire');

require('pretty-monitor').start();

wire({
		//app infrastructure
		config: { module: './config'},
        server: { module: './server' }, 
		
		//controllers
        dashboard:  { create: './controller/dashboard' }, 
        
		
		//plugins
        plugins: [
            //{module: "wire/debug"},
			{module: "yaap/wire", debug:false, shallow:false},
            {module: "yaap/wire/express", server: "server"}
        ]
}, {require: require}).then(function(ctx){
	var port = ctx.server.get('port');
	http.createServer(ctx.server).listen(port, function(){
	  console.log('Express server listening on port ' + port);
	});

    console.log("-----Server initialized -----");
}, function(err){
	console.log("-----Server failed to start -----");
});

