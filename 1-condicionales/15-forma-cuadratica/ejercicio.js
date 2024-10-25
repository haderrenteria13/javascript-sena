// desarrollar el algoritmo que evalué la formula cuadrática o general.

let a = parseFloat(prompt("Ingrese el valor de a:"));
let b = parseFloat(prompt("Ingrese el valor de b:"));
let c = parseFloat(prompt("Ingrese el valor de c:"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else if (a === 0) {
    console.log("El valor de a no puede ser de 0");
} else {
    let raiz = (b ** 2) - 4 * a * c;
    if (raiz < 0) {
        console.log("La raiz es negativa, no se puede calcular");
    } else {
        let x1 = (-b + Math.sqrt(raiz)) / (2 * a);
        let x2 = (-b - Math.sqrt(raiz)) / (2 * a);
        console.log("Los valores de x1 y x2 son:", x1, "y", x2);
    }
}