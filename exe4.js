let Prompt = require('prompt-sync')();

let nomeVender = Prompt("Digite o seu nome: ")
let salafix = parseFloat(Prompt("Digite o seu salário fixo : "))
let vendtotal = parseFloat(Prompt("Digite o total das suas vendas no mês : "))
let salatotal = (salafix + (15/100).toFixed(2)*vendtotal)
console.log("\n Nome :" + nomeVender)
console.log("\n Salário Fixo : " + salafix)
console.log("\n Dinheiro ganho em vendas : " + (15/100).toFixed(2)*vendtotal)
console.log("\n Salário Total : " + salatotal)