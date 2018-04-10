"use strict";

var restify = require('restify');
var fs = require('fs');
var server = restify.createServer();

var texto ="";

server.listen(8888, function() {
    console.log(' %s escuchando en el puerto %s', server.name, server.url);
});

server.on('unCaughtException', (resq, res, route, err) => {
    err.body = 'He pillado una exception :(';
    res.send(500, err);
})