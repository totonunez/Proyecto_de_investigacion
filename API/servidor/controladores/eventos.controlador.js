exports.createViaje = (viajes) => {
    const { Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID } = req.body;
    const query = `INSERT INTO viaje(Fecha_Ini,Fecha_Fin,motivo,lugar,Proyecto_Proy_ID) values(?,?,?,?,?);`;
    mysqlConnection.query(query, [Fecha_Ini, Fecha_Fin, motivo, lugar, Proyecto_Proy_ID], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viaje creado con exito!");
        } else {
            console.log(err);
        }
    });
};

exports.getViajes = (viajes) => {
    const {id_proyect} = req.params;
    const query = `select * from viaje where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id_proyect], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viajes retornado con exito!");
        } else {
            console.log(err);
        }
    });
};
exports.getViajesMulti = (viajes) => {
    const {id_viaje} = req.params;
    const query = `select * from viaje where Proyecto_Proy_ID=?`;
    mysqlConnection.query(query, [id_viaje], (err, rows, fields) => {
        if (!err) {
            console.log(req);
            res.json(rows);
            console.log("Viajes retornado con exito!");
        } else {
            console.log(err);
        }
    });
};