//conexion con la base de datos

const mysql=require('mysql');


// retorna un objeto que se guarda en mysqlConecction
const mysqlConnection = mysql.createConnection({
    //modificar con la informacion de la base de datos.
    host:'localhost',
    user:'root',
    password:'conforta',
    database:'Proyecto_de_investigacion',
    port: 3306
});

//establecer el conexion
mysqlConnection.connect(function(err){

    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected!');
    }
});

module.exports=mysqlConnection;// para poder exportar y trabajar con a conexion de la base de datos