let colors = require('colors');

/*const estudiante={
    id: 1,
    nombre: 'Cristian',
    apellido: 'Buitrago',
    identificacion: 652351,

}*/

/*const estudiantes=["Valentina", "Nicolás", "Yuliana", "Sebastián"]
//desestructurar el arreglo estudiantes:
let [V, N, Y]=estudiantes
console.log(V,N, Y)*/

const g1=["Valentina",
         "Nicolás", 
         "Yuliana"]

const g2=["Enrique",
         "Jairo", 
         "Valeria"]

const g3=[
            ...g1,
            "Diana",
            ...g2,
         "Duvan" 
         ]
         const estudiante={
            id: 1,
            nombre: 'Cristian',
            apellido: 'Buitrago',
            identificacion: 652351,
            amigos: g3
        }

console.log(estudiante)
//destructurar el objeto estudiante
/*let {nombre, identificacion}=estudiante


console.log(nombre.red)
console.log(identificacion)*/

