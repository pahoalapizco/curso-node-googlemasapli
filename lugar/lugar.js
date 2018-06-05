const axios = require('axios');

const encodeUrl = encodeURI( argv.direccion );

console.log(`Dirección: ${argv.direccion} \n Dirección encriptada: ${encodeUrl}`);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyBFoZsClCfRfP3gXa3FDjocAYUmfSEfj5Q`)
    .then( resp => {
        let resultados = resp.data.results[0];
        console.log('\n======================================================\n');
        console.log('Dirección: ', JSON.stringify(resultados.formatted_address, undefined, 2));
        console.log('\n======================================================\n');
        console.log(`Latitud:`, JSON.stringify(resultados.geometry.location.lat, undefined, 2) );
        console.log('\n======================================================\n');
        console.log(`Longitud:`, JSON.stringify(resultados.geometry.location.lng, undefined, 2) );
    })
    .catch( e => console.log( 'ERROR!!!', e) ); 