// 16.desarrollar un algoritmo que capture un número y diga si es par o impar.

let Num = Number(prompt("Digite el numero:"))

if (isNaN(Num)){
    console.log("Digite un numero.")
} else if (Num % 2 === 0) {
    console.log ("Es par.")
} else {
    console.log ("Es impar")
}