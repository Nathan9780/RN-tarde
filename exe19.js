let Prompt = require('prompt-sync')();

let homens = 0
let mulheres = 0
let n = 0
let numeroPesso = 0
do {
    let nome = Prompt("Digite seu nome")
    numeroPesso++
    let genero = Prompt("Gênero : Masculino ou Feminino ")

    if (genero === "Masculino"){
        console.log("Seu nome é : " + nome + " Gênero : " + genero)
    homens++
    console.log("Número da Pessoa : " + numeroPesso)
    }else if (genero === "Feminino"){
            console.log("Seu nome é : " + nome + " Gênero : " + genero)
    mulheres++
    console.log("Número da Pessoa : " + numeroPesso)
    }else{
        console.log("Seu nome é : " + nome + " Gênero : " + " Fluido ou isso não é um Gênero ")
    n++
    console.log("Número da Pessoa : " + numeroPesso)
    }


} while (numeroPesso <56);

console.log("\n ------>Entrevistamos 56 pessoas<------")
console.log("resultados de Gênero : ")
console.log("\nHomens : " + homens)
console.log("\nMulheres : " + mulheres)
console.log ("\nGênero Fluido ou isso não é um Gênero : " + n)
