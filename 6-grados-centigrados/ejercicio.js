// Escriba el algoritmo que al capturar un numero entero convierta grados centígrados a kelvin, si captura un numero flotante diga si es mayor a 10.5,y si captura un carácter escriba su nombre.

let num = parseFloat(prompt("Digite el primer numero: "))

let kelvin = num + 273.15
if (kelvin > 10.5){
    console.log("El numero es mayor que 10,5")
}else{
    console.log("El numero es menor que 10,5")
}