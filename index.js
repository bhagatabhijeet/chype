require('dotenv')
    .config();
const express = require('express');
const app = express();
const http = require('http');
const routes = require('./routes');
require('./services/passport');
require('./db/mongoDBConnection');

//use client build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT||3001;

const server = http.createServer(app);

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Someone connected from the front end');

    socket.on('clientToServerMessage', ({user, message, friend, room}) => {
        console.log('hello world');

        socket.join(room);
        io.to(room).emit("serverToClientMessage", {user, message, friend});

        console.log(user, message);
        io.emit("serverToClientMessage", {user, message});
    })
});

app.use(express.json());

app.use(routes);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});