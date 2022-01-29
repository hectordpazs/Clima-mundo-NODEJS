const { getClima } = require('./clima/clima');
const { cargarDB } = require('./peticion_pais');

const argv = require ('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand: true
    }
}).argv;

cargarDB(argv.direccion);

/*getClima(10.633333333,-71.633333333)
.then(temp=> console.log(temp))
.catch(error=> console.log(error))*/

