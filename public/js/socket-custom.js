var socket = io();

socket.on('connect', function(){
    console.log("Conectado al servidor");
});
//on =>escuchar
socket.on('disconnect', function(){
    console.log("perdimos conexion con el servidor");
});


//emit =>enviar información
socket.emit('enviarMensaje',{
    usuario:'Emiliano',
    mensaje:'Hola mundo'
}, function( resp ){
    console.log('Respuesta del servidor',resp);
});

//Escuchar información
socket.on('enviarMensaje',(mensaje)=>{
    console.log('Escuchando servidor:',mensaje);
});
