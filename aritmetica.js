// const a=10

// const b=30

// //manera legada tradicional de escribir funciones
// function suma(a,b){
//    console.log(`La suma es:${a+b}`)
// }
// suma(a,b)

//manera con identificador tradicional de escribir funciones
// const suma=function(a,b){
//     console.log(`La suma es:${a+b}`)
// }
// suma(a,b)

//manera sintáxis flecha
// const sumar=(a,b)=> console.log(`La suma es:${a+b}`)
// ABREVIADO: const sumar=(a,b)=>a+b
// sumar(a,b)

//importar commonjs
//const sumar=require('./operaciones')
import {sumar,restar,multiplicar} from './operaciones.js'
const a=10
const b=30
console.log(`La resta es:${restar(a,b)}`)

