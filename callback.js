function llamarAlumno(alumno, callback){
    let llamadaAlumno=`Llamando a alumno; ${alumno}`
    //ejecutar la función callback
    callback(llamadaAlumno)
}

//Definir función callback
const imprimir=(texto)=>{
    console.log(texto)
}

//Invocar la función principal de llamarAlumno
llamarAlumno("Cristian Buitrago", imprimir)