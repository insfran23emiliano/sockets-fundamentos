const express = require('express');
const socketIO = require('socket.io');//no trabaja directamente con express, sino con un servidor que viene con node-(http)
const http = require('http');



const path = require('path');

const app = express();
let server =http.createServer(app);//seteo la configuracion que voy hacerle al express


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO (input/ouput) = esta es la comunicacion del backend
module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});