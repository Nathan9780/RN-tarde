let Prompt = require('prompt-sync')();

let nomeAlun = Prompt('digite o nome do aluno: ')


let not1 = parseFloat(Prompt('digite a primeira nota: '))
let not2 = parseFloat(Prompt('digite a segunda nota: '))
let not3 = parseFloat(Prompt('digite a terceira nota: '))

console.log( 'Aluno: ' + nomeAlun + ' nota final: ' + (not1+not2+not3/3));

