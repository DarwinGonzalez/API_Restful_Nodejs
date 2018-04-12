"use strict";

var restify = require('restify');
var fs = require('fs');
var server = restify.createServer();

var texto ="";
var nid=100, valor= 'informatica';

var text = fs.readFileSync('data.txt','utf8')
texto = text.split('\n');
console.log(texto);

fs.appendFile('data.txt', addFila(nid, valor), 'utf8');

function addFila(nid, valor) {
    var aux = "{ \"nid\":\"" + nid + "\"," + "\"valor\":\"" + valor + "\" }\n";
    return aux;
}


server.listen(process.env.PORT, function() {
    console.log(' %s escuchando en el puerto %s', server.name, server.url);
});

server.on('unCaughtException', (resq, res, route, err) => {
    err.body = 'He pillado una exception :(';
    res.send(500, err);
});
