var socket = io.connect('http://localhost:3000'); // Same port in index.js server listen
var username = document.getElementById('username');
var message = document.getElementById('message');
var send = document.getElementById('send');