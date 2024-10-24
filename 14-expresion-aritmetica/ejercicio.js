// Desarrollar un algoritmo que evalué la siguiente expresión aritmética 1/n.

let ValorN = parseInt(prompt("Ingrese el numero a dividir:"))

if (isNaN(ValorN)) {
    console.log("Ingrese un valor valido")
}
else if (ValorN >= 1){
    Division = 1/ValorN
    console.log (Division)
} else if (ValorN === 0) {
    console.log ("No se puede dividir por 0")
}