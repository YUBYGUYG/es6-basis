const axios = require('axios')

let config = {
    method:'get',
    url: 'https://isro.vercel.app/api/spacecrafts'
}
const f = async()=>{
    try {
        let response=await axios(config)
        response.data.forEach(element => {
            console.log(`Tipo: ${element.spacecrafts.name}`)
            console.log('/////////////')
        });
    } catch (error) {
        console.error(error)
        console.log('no sirve')
    }
}
f()