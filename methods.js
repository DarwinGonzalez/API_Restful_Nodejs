"use strict";

var restify = require('restify');
var fs = require('fs');
var server = restify.createServer();

var texto ="";
var nid = 2, valor = "fisica";
var fila = 0

var text = fs.readFileSync('data.txt','utf8')
texto = text.split('\n');
console.log(texto);
console.log("Escribe tu nombre");

  
fs.appendFile('data.txt', addFila(nid, valor), 'utf8');

function addFila(nid, valor) {
    var aux = "{ \"nid\":\"" + nid + "\"," + "\"valor\":\"" + valor + "\" }\n";
    return aux;
}

function findFilabyNid(nid, valor) {
    var text = fs.readFileSync('data.txt','utf8')
    texto = text.split('\n');
    var aux = "{ \"nid\":\"" + nid + "\"," + "\"valor\":\"" + valor + "\" }\n";
    
    for(var i = 0; i <= texto.length ; i++) {
        if (texto[i] == aux) {
            console.log("Encontrado!");
        }
        else {
            console.log("No encontrado!");
            console.log(aux);
            console.log(texto[i]);
        }
    }
}

findFilabyNid(nid, valor);


server.listen(process.env.PORT, function() {
    console.log(' %s escuchando en el puerto %s', server.name, server.url);
});

server.on('unCaughtException', (resq, res, route, err) => {
    err.body = 'He pillado una exception :(';
    res.send(500, err);
});
