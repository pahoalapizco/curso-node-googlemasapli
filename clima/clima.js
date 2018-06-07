const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8565f74ad4156e7cd0e114807c4b74b1`)

    if (resp.data.cod === 400){
        throw new Error ('No se encontró el clima de la ciudad que buscaba');
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}