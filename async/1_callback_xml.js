let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


let endpoint= 'https://pokeapi.co/api/v2/type'

function exito(response){
    console.log(JSON.parse(response))

}

function fallo(status){
    console.log(status)

}
function get_data(endpoint, exito, fallo){
    //2. Creamos el objeto de conexión
    let http=new XMLHttpRequest()
    //3. Abrir conexión a la API 
    http.open('get', endpoint)
    //4. Enviar la solicitud(request) a la API
    http.send()
    //5.Hacer el tratamiento de la respuesta(response)
    //onload=defino qué hacer con los datos que llegaron de la request
    http.onload= function(){
        if(http.status === 200){
            exito(http.responseText)
        } else{
            fallo(http.status)
        }
        
    }
}

//Invocar lal función get_data
get_data(endpoint, exito, fallo)