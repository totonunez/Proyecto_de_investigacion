module.exports = app => {
    const viajes = require("../controladores/eventos.controlador.js");

    var router = require('./Routes.js');

    // Crear nuevo viaje
    router.post("/viajes/create", viajes.createViaje);

    // Retornar todos los viajes de un proyecto
    router.get("/viajes/:id_proyect", viajes.getViajes);

    // Retornar todos los multimedias de un viaje
    router.get("/viajes/multi/:id_viaje", viajes.getViajesMulti);

    // Actualizar viaje
    router.put("", viajes.getViajesMulti);

    //Eliminar multimedia de un viaje
    router.delete("", viajes.getViajesMulti);

};  