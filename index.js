require('dotenv')
    .config();
const express = require('express');
const path = require("path");
const http = require('http');
const routes = require('./routes');
require('./services/passport');
require('./db/mongoDBConnection');

const PORT = process.env.PORT||3001;

const app = express(); //Create Express App
const server = http.createServer(app); //Crete HTTP Server
const io = require('socket.io')(server); // Create Socket Server from HTTP Server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use client build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


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


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});