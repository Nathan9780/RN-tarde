let Prompt = require('prompt-sync')();


let opcao2 
do {
let anoveiculo = parseFloat(Prompt('digite o ano do veiculo: '))
let precovei = parseFloat(Prompt('digite o preço do veiculo: '))

if (anoveiculo<=2000){
console.log('ano do veiculo: ' + anoveiculo + "\n" + ' preço: ' + precovei )

let opcao = Prompt('deseja continuar a compra Sim ou Nâo,  ')
do {let descont = (12/100)*precovei
    console.log("preço do desconto: " + descont) 
    opcao = Prompt('deseja continuar a compra Sim ou Nâo:  ')
precovei = -descont
} while(opcao === "Sim");

}else if(anoveiculo>=2000){
    console.log('ano do veiculo: ' + anoveiculo + "\n" + ' preço: ' + precovei )
let opcao = Prompt('deseja continuar a compra Sim ou Nâo,  ')
do {let descont = (7/100)*precovei
   console.log("preço do desconto: " + descont);
   opcao = Prompt('deseja continuar a compra Sim ou Nâo:  ')
 precovei = -descont
   
} while (opcao === "Sim");

}opcao2 = Prompt('deseja comprar outro veiculo Sim ou Nâo:  ')
} while (opcao2 = "Sim");