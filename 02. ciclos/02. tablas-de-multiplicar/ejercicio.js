let NumMultiplicador  = Number(prompt("Digite un numero a muliplicar:"))
let Contador = 1 

while (Contador <= 10) {
    Contador++
    let Resultado = Contador*NumMultiplicador
    document.write (NumMultiplicador, "x", Contador, "=", Resultado, "<br>")
} 