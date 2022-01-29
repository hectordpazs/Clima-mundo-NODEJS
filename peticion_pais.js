const axios = require("axios").default;
const {getClima} = require('./clima/clima');

const cargarDB = (dir)=>{
        const options = {
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
            params: {namePrefix: dir},
            headers: {
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
                'x-rapidapi-key': 'f6ce90af3amsh877aa872cd48ce5p18cc1cjsn719c18151ec9'
            }
        };
            
        axios.request(options).then(function (response) {

            if(!response.data.data[0]){
                throw new Error ('No existe la ciudad ' + dir)
            }else{
                const datos = response.data.data[0];
                const {region, latitude, longitude, countryCode, country, city} = datos
    
                console.log(region, latitude, longitude, countryCode, country, city);
                
                getClima(latitude, longitude)
                .then(temp=> console.log(temp))
                .catch(e=> console.log(e))
            }

        }).catch(function (error) {
            console.error(error);
        });
    
}

module.exports = {
    cargarDB
}