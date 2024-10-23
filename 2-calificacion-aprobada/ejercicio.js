// desarrollar un programa que, dado una calificación de un alumno en un parcial, escribe aprobado si la calificación es superior a 3.

let calificacion = parseInt(prompt("Ingrese la calificación del alumno: "));

if (calificacion > 3) {
    console.log("Aprobado");
} else {
    console.log("Reprobado, sos una loca");
}