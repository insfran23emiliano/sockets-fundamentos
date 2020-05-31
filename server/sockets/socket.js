const { io }= require('../server')

io.on('connection',(client)=>{//clien me dice toda la info del usuario - info de la computadora etc
    console.log('Usuario coenctado');

    client.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta app'
    })

    client.on('disconnect',()=>{
        console.log("Usuario desconectado");
    });

    //Escuchar el cliente
    client.on('enviarMensaje',(data, callback)=>{//llamo al callback para ver si todo salio bien
        
        console.log("mensaje:" , data);

        client.broadcast.emit('enviarMensaje',data);//todos los usarios que esten en nuestro servidor
        /*if( data.usuario ){//(*1)ver front
            callback({
                resp:'TODO SALIO BIEN'
            });
        }else{
            callback({
                resp:'TODO SALIO MAL!'
            });
        }*/

        //callback();//del lado del cliente lo llamas
    });
});