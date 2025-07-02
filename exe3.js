let Prompt = require('prompt-sync')();

let distper = parseFloat(Prompt('digite a distancia : ')); 
let consumid = parseFloat(Prompt('digite o consumo KM: '));

console.log('o consumo médio da distancia a ser percorrida é : ' , (distper/consumid).toFixed(3));