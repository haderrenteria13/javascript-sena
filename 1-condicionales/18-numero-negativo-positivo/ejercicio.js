// 18.Desarrollar un algoritmo que capture un número y diga si negativo o positivo.
let Num = Number (prompt("Digite el numero:"))

if (isNaN(Num)){
    console.log ("Digite un numero.")
} else if (Num <= - 1){
    console.log("Es negativo.")
} else if (Num === 0){
    console.log ("Es un numero neutro.")
} else {
    console.log ("Es positivo.")
}