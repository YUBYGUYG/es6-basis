let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


let endpoint= 'https://pokeapi.co/api/v2/type'

const exito=(response)=>{
    const tipos=JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`)
    })
    //console.log(JSON.parse(response))
}

const fallo=(status)=>{
    console.log(status)
}

const get_data=(endpoint, exito, fallo)=>{
    //2. Creamos el objeto de conexión
    let http=new XMLHttpRequest()
    //3. Abrir conexión a la API 
    http.open('get', endpoint)
    //4. Enviar la solicitud(request) a la API
    http.send()
    //5.Hacer el tratamiento de la respuesta(response)
    //onload=defino qué hacer con los datos que llegaron de la request
    http.onload=()=>{
        if(http.status === 200){
            exito(http.responseText)
        } else{
            fallo(http.status)
        }
    }
}

//Invocar lal función get_data
get_data(endpoint, exito, fallo)