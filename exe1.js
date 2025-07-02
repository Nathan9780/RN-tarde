let Prompt = require('prompt-sync')();

let numero1 = parseFloat(Prompt('digite o primeiro nr: ')); 
let numero2 = parseFloat(Prompt('digite o segundo nr: '));

console.log('o resultado da soma eh: ' , (numero1+numero2))