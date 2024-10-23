// Desarrolle un algoritmo que lea un número, en caso de ser negativo lo imprima junto con su positivo.

const num = parseInt(prompt("Ingrese un número: "));

if (num < 0) {
    console.log(`Negativo: ${num}, Positivo: ${-num}`);
} else {
    console.log("El número no es negativo.");
}

