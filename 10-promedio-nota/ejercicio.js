// A ciertos estudiantes se les dice que su calificación final será el promedio de las dos calificaciones más altas de entre las tres que se han obtenido en el curso. Haga un algoritmo que permita a un estudiante efectuar el cálculo correspondiente a su nota final.

let Calificacion1 = parseInt(prompt("Digite la calificacion 1: "));
let Calificacion2 = parseInt(prompt("Digite la calificacion 2: "));
let Calificacion3 = parseInt(prompt("Digite la calificacion 3: "));
let promedio = 0;

if (Calificacion1 >= Calificacion2 && Calificacion1 >= Calificacion3) {
    promedio = (Calificacion1 + Math.max(Calificacion2, Calificacion3)) / 2;
} else if (Calificacion2 >= Calificacion1 && Calificacion2 >= Calificacion3) {
    promedio = (Calificacion2 + Math.max(Calificacion1, Calificacion3)) / 2;
} else {
    promedio = (Calificacion3 + Math.max(Calificacion1, Calificacion2)) / 2;
}

console.log("El promedio de las dos calificaciones más altas es: " + promedio);


