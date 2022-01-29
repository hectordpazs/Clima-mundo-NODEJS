const axios = require ('axios')

const getClima = async(lat, lng)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5a8cde4053608a71368bc87a53da3d20`);
    return `La Temperatura es: ${resp.data.main.temp}`;
}

module.exports = {
    getClima
}