/*Fibonacci foi um matematico famoso crie um programa que faça a famosa sequencia de fibonnacci digite o numero desejado para mostrar a quantidade de numeros da sequencia*/ 


let divResultado=document.getElementById("resposta")
let num=document.getElementById("inptfib")

let segundo=0
let primeiro=1
let ultimo;

function calcular() {
    




divResultado.innerHTML = ( "0 <br>" + primeiro)
for (let i = 0; i < Number(num.value); i++) {
    ultimo=primeiro+segundo
    segundo=primeiro
    primeiro=ultimo
    divResultado.innerHTML += (" <br>" + ultimo)
}
}
