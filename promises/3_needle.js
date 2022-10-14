const needle=require('needle')

let endpoint= 'https://pokeapi.co/api/v2/type'

needle('get', endpoint)
        .then((response)=>{
            console.log(response)
        })
        .catch() 