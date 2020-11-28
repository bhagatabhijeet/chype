const app = require('express')();
const http = require('http');

const PORT = 3001;

const server = http.createServer(app);

const io = require('socket.io')(server);


io.on('connection', socket => {

    console.log('Someone connected from the front end');

    socket.on('clientToServerMessage', ({user, message}) => {
        console.log('hello world');
        console.log(user, message)
        io.emit("serverToClientMessage", {user, message});
    })
});





server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
