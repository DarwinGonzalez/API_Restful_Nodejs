
var fs = require('fs');

function addFila(nid, valor) {
    var aux = "{ \"nid\":\"" + nid + "\"," + "\"valor\":\"" + valor + "\" }\n";
    return aux;
}

function findFilabyNid(nid, valor) {
    var text = fs.readFileSync('./data.txt','utf8')
    var texto = text.split('\n');
    var aux = "{ \"nid\":\"" + nid + "\"," + "\"valor\":\"" + valor + "\" }";
    
    for(var i = 0; i < texto.length ; i++) {
        if (texto[i].toString() === aux.toString()) {
            console.log("Encontrado!");
        }
        else {
            console.log("No encontrado!");
        }
    }
}

function deleteFila(nid3,valor3) {
    var text = fs.readFileSync('./data.txt','utf8')
    var texto = text.split('\n');
    var aux = "{ \"nid\":\"" + nid3 + "\"," + "\"valor\":\"" + valor3 + "\" }";
    var aux2 = " ";
    var aux3 = " ";
    
    for(var i = 0; i < texto.length ; i++) {
        if (texto[i].toString() === aux.toString()) {
            aux3 = texto[i];
            aux3.replace(aux3, aux2);
            console.log("Eliminado!");
        }
        else {
            console.log("No encontrado!");
        }
    }
}

module.exports = {  findFilabyNid, addFila, deleteFila  }