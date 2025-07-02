let Prompt = require('prompt-sync')();

let C = parseFloat(Prompt('digite a temperatura em celsius: '))
let F =(9*C+160) / 5
console.log("Convertendo " + C + "C"+ " Para fahrenheit " + F + "F")