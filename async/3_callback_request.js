const request=require('request')

let endpoint= 'https://pokeapi.co/api/v2/type'

const r=request(endpoint, {json: true},function(err, res, data){
    data.results.forEach(element => {
        console.log(`url: ${element.url}`)
        console.log(`Tipo: ${element.name}`)
        console.log('++++++++++++++')
    });

})

