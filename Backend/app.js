var express = require('express');
var app = express();
var socket = require('socket.io');
socket = socket(server)

socket.on('connection',(socket)=> {
    console.log(socket.id);
})

server = app.listen(8080, function(){
    console.log('ser is runing on port 8080')
 
});