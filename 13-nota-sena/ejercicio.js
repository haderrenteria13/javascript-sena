// desarrollar un algoritmo que halle la nota total de una materia en el SENA, y determine si la gano o la reprobó

let calificacion1 = parseFloat(prompt("Ingrese la calificación 1:"));
let calificacion2 = parseFloat(prompt("Ingrese la calificación 2:"));
let calificacion3 = parseFloat(prompt("Ingrese la calificación 3:"));

let notaTotal = calificacion1 + calificacion2 + calificacion3;

let umbralAprobacion = 60; 

if (notaTotal >= umbralAprobacion) {
    console.log("Has aprobado la materia con una nota de " + notaTotal);
} else {
    console.log("Has reprobado la materia con una nota de " + notaTotal);
}
