//axios depedencia uh
//traer axios
const axios = require('axios')

let config = {
    method:'get',
    url: 'https://www.dnd5eapi.co/api/ability-scores/cha'

}
//creando la promesa 
axios(config)
.then((response)=>{
    //return va a la data linea 16
    return response.data.skills
})
.then((data)=>{
data.forEach(element=>{
    console.log(`Index: ${element.index}`)  
    console.log('--+-+-++-+-+-+-+-+-+-+-+') 
})
})
.catch((error)=>{
    console.error(error)
    console.log('No sirrrveeeeeeee') 
})