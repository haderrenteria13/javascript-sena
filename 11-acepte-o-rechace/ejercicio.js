// 11.Escriba un algoritmo que acepte o rechace una pieza en forma de varilla, para una empresa de acuerdo a los siguientes criterios: a. Su longitud debe ser mayor de 7.5 cm pero no exceder los 9 cm b. Su diámetro no debe ser menor que 0.5 cm ni mayor de 1.3 cm. c. Por ningún motivo su masa debe exceder los 5.8 cm i. Nota: masa = diámetro * longitud * densidad; densidad = 3.5 Gr/cm

let densidad = 3.5;
let longitud = number(prompt("Digite la longitud de la varilla"))
let diametro = number(prompt("Digite el diametro de la varilla"))
let masa = diametro * longitud * densidad;

if (longitud > 7.5 && longitud < 9) {
  if (diametro > 0.5 && diametro < 1.3) {
    if (densidad < 5.8) {
      console.log("Aceptado");
    }else{
        console.log("Rechazado");
    }
  }else{
    console.log("Rechazado");
  }
}else {
  console.log("Rechazado");
}