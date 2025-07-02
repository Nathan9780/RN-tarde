let Prompt = require('prompt-sync')();

let A = parseFloat(Prompt("Digite um Valor: "))
let B = parseFloat(Prompt("Digite outro Valor: "))
 console.log("\n O Valor de A é " + A )
 console.log("\n O Valor de B é " + B )
 console.log("\n CHANGE" )

 A = B
 B = A

 console.log("\n O Valor atual A é " + A )
 console.log("\n O Valor atual B é " + B )

 
