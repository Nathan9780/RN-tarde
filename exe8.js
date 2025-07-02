let Prompt = require('prompt-sync')();

let Sdolar = parseFloat(Prompt('digite a cotação do dolár: '))
let Qdolar = parseFloat(Prompt('quantos doláres voce tem: '))
let Real = Qdolar.toFixed(2)*Sdolar.toFixed(2)

console.log("Você tem :" + "$" + Qdolar)
console.log("A cotação do Dolár é :" + "$" + Sdolar )
console.log("Convertendo Você tem :" + "R$" + Real.toFixed(2))
