let Prompt = require('prompt-sync')();

let PrecoCus = 300
let PrecoVen = 700

console.log("O custo foi de R$300")
console.log("A venda por R$700")

let AcreUsu = parseFloat(Prompt("Diga um percentual"))

let PrecoAcre = AcreUsu*PrecoCus/100

console.log("Junto do Percentual : " + (PrecoAcre+PrecoCus) )