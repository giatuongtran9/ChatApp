const express = require('express')
const app = express()
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/../../build'))

io.on("connection", (socket) => {
    const  roomId  = socket.handshake.query['roomId'];

    socket.join(roomId);

    socket.on('new-user', (user) => {
        console.log(user + ' joins the room')
        io.in(roomId).emit('new-user', user);
    });

    socket.on('newChatMessage', (data) => {
        io.in(roomId).emit('newChatMessage', data);
    });

    socket.once('disconnect', () => {
        socket.leave(roomId);
    });
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});