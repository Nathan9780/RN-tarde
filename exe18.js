let Prompt = require('prompt-sync')();
let perso = 0
do {
    let idade = parseFloat(Prompt("Digite sua idade"))
    perso++
    console.log("Número da pessoa é :" + perso)
    if (idade >= 18){
     console.log("Maior")
    }else{
        console.log("Menor")
    }
} while (perso <= 75);