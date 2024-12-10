// Un vendedor desea calcular su comisión total sobre las ventas de varios artículos. Al vendedor le corresponde el 3% de comisión sobre artículos cuyo precio es menor de $2.000.oo y el 5% de comisión sobre artículos cuyo precio es de $2000.oo o más. El vendedor hizo 50 ventas y desea saber también cuántas ventas hizo menores de 2000 y cuantas mayores o iguales a 2000.

let comision = 0
let ventamenor = 0
let ventamayor = 0
let venta = parseInt(prompt("Digite el valor de su venta:"))
let articulo = parseInt(prompt("Cuantos articulos llevaste:"))

if(venta < 2000){
    comision = venta * 0.03
    ventamenor =+ 1
    if (venta >= 2000){
        comision = venta * 0.05
        ventamayor =+ 1
    }
}

console.log("Total de ventas menores a 2000: " + ventamenor)
console.log("Total de ventas mayores o iguales a 2000: " + ventamayor)
console.log("Comisión total: " + comision)