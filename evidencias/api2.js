const axios = require('axios')

let config = {
    method:'get',
    url: "https://x-colors.herokuapp.com/api/random"
}

const f = async () =>{
    try{
        let response = await axios(config)
        console.log(response.data.hsl)
    } catch (error) {
        console.error(error)
    }
}
f()