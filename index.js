const app = require('express')();
const http = require('http');

const PORT = 3001;

const server = http.createServer(app);

const io = require('socket.io')(server);


io.on('connection', socket => {

    console.log('Someone connected from the front end');

    socket.on('clientToServerJoinRoom', ({participants}) => {
        console.log("I am the participants!!!",participants)
        socket.join(participants);
    })

    socket.on('clientToServerMessage', ({user, message, friend, room}) => {
        console.log('hello world');
        console.log(user, message, friend)
        io.to(room).emit("serverToClientMessage", {user, message, friend});
    })
});





server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
