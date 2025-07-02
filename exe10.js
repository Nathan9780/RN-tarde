let Prompt = require('prompt-sync')();

let nomeProduto = Prompt('digite o nome do produto: ')
let valorProduto = parseFloat(Prompt('digite o valor do produto: '))
console.log("produto: " + nomeProduto + "\n" +"valor:" + valorProduto + "\n" +" o valor das prestações é: "+(valorProduto/5).toFixed(2))