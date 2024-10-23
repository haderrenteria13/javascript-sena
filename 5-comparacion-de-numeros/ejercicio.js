// desarrollar un programa que capture tres números e imprima por pantalla cual es el número mayor, el menor, cuales son iguales, si los tres diferentes.

let num1 = parseInt(prompt("Digite el numero 1")) 
let num2 = parseInt(prompt("Digite el numero 2"))
let num3 = parseInt(prompt("Digite el numero 3"))

if (num1 > num2 && num1 > num3) {
    console.log ("El numero", num1, "Es el mayor")
} else if (num2 > num1 && num2 > num3){
    console.log ("El numero", num2, "Es el mayor")    
} else {
    console.log ("El numero", num3, "Es el mayor")
}

if (num1 < num2 && num1 < num3) {
    console.log ("El numero", num1, "Es el menor")
} else if (num2 < num1 && num2 < num3){
    console.log ("El numero", num2, "Es el menor")    
} else {
    console.log ("El numero", num3, "Es el menor")
}


if (num1 == num2 && num1 == num3) {
    console.log ("Los tres numeros son iguales")
} else if (num2 == num1 && num2 == num3){
    console.log ("Hay dos numeros iguales")   
} else {
    console.log ("Los tres numeros son diferentes")
}
