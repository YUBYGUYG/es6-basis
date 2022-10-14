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



const get_data=(endpoint)=>{
    //definir una promesa para la conexión a la api
    let promise=new Promise((resolve, reject)=>{
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
            resolve(http.responseText)
        } else{
            reject(http.status)
        }
    } 
})
    return promise
}

async function f(){
    try {
        let response=await get_data(endpoint)
        exito(response)
    } catch(error)  {
        console.log(response)
        
    }
}
f()

//Invocar la función get_data
