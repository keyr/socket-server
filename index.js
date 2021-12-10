const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.join('room1');
    socket.on('message', (message) => {
        console.log(message);
        io.to('room1').emit('message', message);
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});