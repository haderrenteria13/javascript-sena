// desarrollar el algoritmo dado como dato el sueldo de un trabajador, le aplica un aumento del 15% si su sueldo es inferior a $300.000.

let sueldo = parseInt(prompt("Ingrese el sueldo del trabajador: "));

if (sueldo < 300000) {
    let aumento = sueldo * 0.15;
    let sueldoConAumento = sueldo + aumento;
    console.log(`El sueldo con aumento es de $${sueldoConAumento}`);
}
else {
    console.log(`Su sueldo es de $${sueldo}`);
}