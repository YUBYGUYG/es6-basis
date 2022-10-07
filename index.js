import materias from "./materias.js";
import pkg from 'colors'
//console.log(materias)

//métodos de los objetos arreglos
//forEach: recorre un arreglo
//Función callback al estilo legado(tradicional, o sea, con function)
/*materias.forEach(function(materia){
    console.log(`materia: ${materia.nombre}`.yellow)
    console.log(`materia: ${materia.instructor}`.red)
    console.log(`materia: ${materia.notas}`.blue)
})*/

//condicional if
/*materias.forEach((materia)=>{
    if(materia.tipo === 'transversal'){
        console.log(`materia:${materia.nombre}`.blue)
    }
})*/

//map: construye un arreglo con base en otro
/*const profesores=materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)*/

//find: encuentra la primera ocurrencia (elemento en el array) que cumpla con la condición dada
/*const bd=materias.find((materia)=>{
    return materia.instructor==="Fernando Galindo"
})

console.log(bd)*/

//push: no solicita un callback, agrega un elemento a un arreglo
materias.push({
    id: 4,
        nombre: "Diseño FrontEnd",
        instructor: "Julián Urrea",
        tipo: "técnica",
        notas: [
            4.5,
            4,
            4.6
        ]
})
console.log(materias)



//actualizar: findindex
const materia=materias.findIndex((materia)=>{
    return materia.nombre === "Bases de Datos";
})
console.log(materia)


//splice: delete
materias.splice(materia.id,1)
console.log(materias)



//let: variables e identificadores simples
//number
//String's
//Boolean's
//let lenguaje="asquerosojava"

//const: funciones, arreglos, objetos

//template string
//console.log(`Pinche ${lenguaje}`)