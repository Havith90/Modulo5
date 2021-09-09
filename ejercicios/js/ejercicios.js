alert("hola mundo")
let nombre ="javi"
let saludo="hola"
// Ejercicio 1
let n = 90
let m = 50
let r = n + m

console.log( n + m ) // esto imprime en cosola

// Ejercicio 2
let a = 1
let b = 5
let c = 90
let d = 10
let e = 8

let Z = a * b * c * d * e

console.log(Z)

// Ejercicio 3
let x = 6
let y = 10
let z = 4
let q = ((x + z) * y * y)

console.log(q)

// Ejercicio 4
let texto1 = "hola"      
let texto2 = " mundo"

console.log(texto1 + texto2)

//Ejercicio 5
a = 5
b = 3
c = 7 
let N = "5 + 3 + 7 ="
console.log(N+ a+b+c)

// Ejercicio 5'
a = "5"
b = "3"
c = "7"
d = a + b + c 

console.log(a + " + " + b + " + " + c + " = " + d)

//Ejercicio 6

let usuario1 = { nombre: "juan", apellido: "perez" }
let usuario2 = { nombre: "sara", apellido: "aparicio" }
let usuario3 = { nombre: "sebastián", apellido: "gonzales" }
let usuario4 = { nombre: "catalina", apellido: "rodriguez" }
let usuario5 = { nombre: "laura", apellido: "quintanilla" }
let usuario6 = { nombre: "camila", apellido: "lopez" }
let usuario7 = { nombre: "carlos", apellido: "gutierrez" }
let usuario8 = { nombre: "sergio", apellido: "chacon" }
n = 1

if (n == 1) {
    console.log("Hola, " + usuario1.nombre + " " + usuario1.apellido)
}else if(n==2){
    console.log("Hola, " + usuario2.nombre + " " + usuario2.apellido)
}else if (n == 3) {
    console.log("Hola, " + usuario3.nombre + " " + usuario3.apellido)
}else if(n==4){
    console.log("Hola, " + usuario4.nombre + " " + usuario4.apellido)
}else if (n == 5) {
    console.log("Hola, " + usuario5.nombre + " " + usuario5.apellido)
}else if(n==6){
    console.log("Hola, " + usuario6.nombre + " " + usuario6.apellido)
}else if (n == 7) {
    console.log("Hola, " + usuario7.nombre + " " + usuario7.apellido)
}else if(n==8){
    console.log("Hola, " + usuario8.nombre + " " + usuario8.apellido)
}else{
    console.log("Usuario no registrado")
}
// Ejercicio 6' Arreglo / Array

let usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8]

if (n <= usuarios.length ){
    console.log("Hola con arreglo, " + usuarios[n-1].nombre + " " + usuarios[n-1].apellido)    
}else{
    console.log("Usuario no registrado")

}
//Parte II Ejercicio 1
//1. Dado un número b realizar la siguiente operación
b=10
if (b<10 ) {
    console.log(2)
}else{
    console.log(4)
}
//2. Dado dos variables numéricas a y b, determinar cuál de los dos es mayor
a=1
b=2

if (a>b) {
    console.log("a es mayor que b")
} else {
    console.log("b es mayor que a")
}
//3.Dados dos variables numéricas a y b, determinar cuál es mayor, cuál es menor o si son iguales
a=2
b=1
if (a>b) {
    console.log("a es mayor que b")
} if (a<b) {
    console.log("a es menor que b")
}else {
    console.log("a es igual que b")
}

//4. Dado un número n, determinar si es un número par. División modular %     !=0 es diferente a cero
n=3
n=4
if (n % 2 == 0) {
    console.log("Número par")
} else {
    console.log("Número impar")
}

//

// División modular % 

n = 8
let residuo = n % 2 // división modular

if (residuo == 0) {
    console.log(n + " es PAR")
}


if (residuo != 0){
    console.log(n + " es IMPAR")
}
if (residuo > 0) {
    console.log(n + " es IMPAR")
}
if (residuo == 1) {
    console.log(n + " es IMPAR")
}

//5. Realizar un software para el control del ingreso de pesonas al cine, donde las películas se dividen en las siguientes categorías:

// A => Todo público
// B => Desde 9 años
// C => Desde 18 años
// D => Desde 25 años
// El usuario debe ingresar su edad y la categoría de la película que desea ver y el software deberá imprimir en consola si puede no ver la película según la clasificación.


let edad = prompt("Ingrese su edad")
let categoria = prompt("Ingrese la categoria A, B, C o D").toUpperCase()

if (edad >= 0 && categoria == "A" || categoria == "B" || 
    categoria == "C" || categoria == "D") {

    if (categoria == "A") {
        alert("Si puede ver la película cat A 👪")
    }else if (categoria == "B" && edad >= 9){
        alert("Si puede ver la película cat B 🧨")
    }else if (categoria == "C" && edad >= 18){
        alert("Si puede ver la película cat C 🔪")
    }else if (categoria == "D" && edad >= 25){
        alert("Si puede ver la película cat D 🐹")
    }else{
        alert("PARA LA CASA 🏠👈")
    }

}else{
    alert("Edad o categorias invalidas 😣")
}