var express = require('express');
var socket = require('socket.io');

var application = express();

var server = application.listen(3000,function(){
	
});

application.use(express.static('public_html'));

var sio = socket(server); // Connect With Server

sio.on('connection',function(visitor){
	console.log('we have a new visitor as id => ',visitor.id);
});