let Prompt = require('prompt-sync')();

let DinheiroDeposi = parseFloat(Prompt("Digite o dinheiro depositado : "))
let juroP = 0.007
let DinheiroGanho = DinheiroDeposi*0.007


console.log("Seu Dinheiro antes : " + DinheiroDeposi + " Seu dinheiro atual : " + (DinheiroDeposi+DinheiroGanho))