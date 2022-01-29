let pais = [];

try {
        
    pais = require ('./data/countries.json');

    let paisReturned = pais.filter(lista=>{
        return lista.name_es===dir
    })

    if (!paisReturned){
        return `no se consiguio ese pais f`
    }else{
       
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
              console.log(response.data.data[0]);
          }).catch(function (error) {
              console.error(error);
          });
    }
    
} catch (error) {
    pais = []
}