require('dotenv')
    .config();
const express = require('express');
const app = express();
const http = require('http');
const routes = require('./routes');
const mongoose = require('mongoose');
require('./services/passport');

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

    socket.on('clientToServerMessage', ({user, message}) => {
        console.log('hello world');
        console.log(user, message);
        io.emit("serverToClientMessage", {user, message});
    })
});

// connect Mongoose to MongoDB -- TODO move to another file
function connectToMongoDB() {
    const dbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/chype';

    // mongoose.connection
    //      .on('error', console.log)
    //      .on('disconnected', connectToMongoDB)
    //      .once('open', listen);
    return mongoose.connect(dbUrl, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

connectToMongoDB();
// end connect Mongoose to MongoDB

app.use(express.json());

app.use(routes);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
