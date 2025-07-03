let Prompt = require('prompt-sync')();
let numero = 0
do {
    let numeroU = parseFloat(Prompt("Digite um número"))
    numero++
    console.log("Posição : " + numero)
    if (numeroU > 10 && numeroU < 150){
      let numso = 0
      numso++
     console.log("São : " + numso + " Números maiores que 10 e menores que 150")
    }else{
        console.log("Não é maior que 10 e menor que 150")
    }
} while (numero <= 80);


