"use strict";

var restify = require('restify');
var fs = require('fs');
var app = require('./controllers/actions.js');
var server = restify.createServer();


var texto ="";
var nid = 2, valor = "fisica";
var nid2 = 7, valor2 = "hola";
var nid3 = 3, valor3 = "quimica";
var fila = 0

var text = fs.readFileSync('data.txt','utf8')
texto = text.split('\n');
console.log(texto);
console.log("Escribe tu nombre");

  
fs.appendFile('data.txt', app.addFila(nid2, valor2), 'utf8');


app.findFilabyNid(nid, valor);
app.deleteFila(nid3,valor3);


server.listen(process.env.PORT, function() {
    console.log(' %s escuchando en el puerto %s', server.name, server.url);
});

server.on('unCaughtException', (resq, res, route, err) => {
    err.body = 'He pillado una exception :(';
    res.send(500, err);
});
