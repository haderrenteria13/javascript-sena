// Prepare un algoritmo que identifique e imprima el número medio de un conjunto de tres números únicos. El número medio es aquel que no es el menor ni el mayor.

let Num1 = Number(prompt("Digite el numero 1:"))
let Num2 = Number(prompt("Digite el numero 2:"))
let Num3 = Number(prompt("Digite el numero 3:"))

if ((Num1 > Num2 && Num1 < Num3) || (Num1 > Num3 && Num1 < Num2)) {
    console.log("El numero", Num1, "es el de la mitad")
} else if ((Num2 > Num1 && Num2 < Num3) || (Num2 > Num3 && Num2 < Num1)) {
    console.log("El numero", Num2, "es el de la mitad")
} else if ((Num3 > Num1 && Num3 < Num2) || (Num3 > Num2 && Num3 < Num1)) {
    console.log("El numero", Num3, "es el de la mitad")
}