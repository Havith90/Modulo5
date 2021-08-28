// Ayuda a repetir n veces un algo
//Parte II Ejercicios de bucle

// Ejercicio 1

let n = 10
let salida = ""

for (let index = 0; index <= n; index++) {
    
    if (index == n) {
        salida = salida + index
    }else{
        salida = salida + index + "-"
    }
}
console.log(salida)

// Ejercicio 2

n = 10
let salida = ""

for (let index = 0; index >= -n; index--) {
    
    if (index == n) {
        // salida = salida + (index * -1)
        salida += index  //acumulativo (index * -1) 
    }else{
        salida += index + ";"
    }
}
console.log(salida)

//Ejercicio 3

n = 10
let suma = 0

for (let index = 0; index <= n; index++) {
    suma += index
}

console.log("La suma es: " + suma)
