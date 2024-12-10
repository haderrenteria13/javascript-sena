// 17.desarrollar el algoritmo que lea tres números y diga si uno es divisible del otro.

let Num1 = Number(prompt("Digite el numero 1:"))
let Num2 = Number(prompt("Digite el numero 2:"))
let Num3 = Number(prompt("Digite el numero 3:"))

if (isNaN(Num1) || isNaN(Num2) || isNaN(Num3)){
    console.log("Digite un numero.")
} else if ((Num1 % Num2 === 0) || (Num1 % Num3 === 0) || (Num2 % Num1 === 0) || (Num2 % Num3 === 0) || (Num3 % Num1 === 0) || (Num3 % Num2 === 0)) {
    console.log("Uno de los números es divisible por otro.")
} else {
    console.log("Ninguno de los números es divisible por otro.")
}