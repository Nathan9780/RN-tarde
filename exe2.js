let Prompt = require('prompt-sync')();

let numero1 = parseFloat(Prompt('digite o primeiro nr: ')); 
let numero2 = parseFloat(Prompt('digite o segundo nr: '));

console.log('o resultado da soma eh: ' , (numero1+numero2))

console.log('o resultado da subtração eh: ' , (numero1-numero2))

console.log('o resultado da multiplicação eh: ' , (numero1*numero2))

console.log('o resultado da divisão eh: ' , (numero1/numero2).toFixed(2))