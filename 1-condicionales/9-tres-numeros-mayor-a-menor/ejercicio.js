// Dados tres números enteros únicos, a, b y c. Elabore un algoritmo que los ordene de mayor a menor e imprímalos.

let a = parseInt (prompt("Digite el numero 1: "))
let b = parseInt (prompt("Digite el numero 2: "))
let c = parseInt (prompt("Digite el numero 3: "))

if (a > b && b > c){
    console.log (a)
    console.log (b)
    console.log (c)
} else if (a > c && c > b){
    console.log (a)
    console.log (c)
    console.log (b)
} else if (b > a && a > c){
    console.log (b)
    console.log (a)
    console.log (c)
} else if (b > c && c > a){
    console.log (b)
    console.log (c)
    console.log (a)
} else if (c > a && a > b){
    console.log (c)
    console.log (a)
    console.log (b)
} else {
    console.log (c)
    console.log (b)
    console.log (a)
}
