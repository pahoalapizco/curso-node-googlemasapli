const axios = require('axios');

const getLugarLatLng =  async (direccion) => {
    const encodeUrl = encodeURI( direccion );
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyBFoZsClCfRfP3gXa3FDjocAYUmfSEfj5Q`)
        
    if( resp.data.status === 'ZERO_RESULTS'){
        throw new Error (`No hay resultados para esta ciudad: ${ direccion }`);
    }

    let lugar  = resp.data.results[0];
    let coordenadas = lugar.geometry.location;

    return {
        direccion: lugar.formatted_address,
        lat: coordenadas.lat, 
        lng:  coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}