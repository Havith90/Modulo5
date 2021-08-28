alert("hola mundo")
let nombre ="javi"
let saludo="hola"
// Ejercicio 1
let n = 90
let m = 50
let r = n + m

// Ejercicio 2
let a = 10
let b = 20
let c = 25
let d = 30
let e = 35
let Z = a*b*c*d*e

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

console.log( texto1 + texto2 )

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

console.log(a + " + " + b + " + " + c + " = " + d )

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



