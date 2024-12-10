// Desarrolle un algoritmo que lea de un registro: el nombre, la edad, el sexo, el estado civil de cualquier persona e imprima el nombre de la persona, si corresponde a un hombre casado mayor de 40 años o a una mujer soltera menor de 50 años.

let Nombre = prompt ("Digite su nombre:")
let Edad = parseInt (prompt("Digite su edad:"))
let Sexo = prompt ("Digite su sexo:")
let EstadoCivil = prompt ("Digite su estado civil:")

if (Sexo === "hombre" && EstadoCivil === "casado" && Edad > 40) {
    console.log ("Hola", Nombre, "Usted es", Sexo, "Y su estado civil es", EstadoCivil)
} else if (Sexo === "mujer" && EstadoCivil === "soltera" && Edad < 50) {
    console.log ("Hola", Nombre, "Usted es", Sexo, "Y su estado civil es", EstadoCivil)
} else {
    console.log ("Gracias por ingresar sus datos, no cumple")
}