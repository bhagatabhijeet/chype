require('dotenv')
    .config();
const express = require('express');
const path = require("path");
const http = require('http');
const routes = require('./routes');
require('./services/passport');
require('./db/mongoDBConnection');
const {setSocketId,getSocketIdAndLanguage} =require("./controllers/userController");
const {signOut} =require("./controllers/authController");
const {translateMessage,storeMessage} = require("./controllers/messageController");

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
    console.log('Someone connected from the front end',socket.id);
    socket.on("USER_SOCKET_ID",payload =>{
      setSocketId(payload.id,payload.socketId)
      // console.log(payload);
      io.emit("USER_SOCKET_ID",payload.id);
    });  

    socket.on("SIGN_OUT",payload =>{
      console.log(payload.id + " " + payload.email + " signed out");
      signOut(payload.id);
      // setSocketId(payload.id,payload.socketId)
      // console.log(payload);
      io.emit("SIGN_OUT",{id:payload.id,email:payload.email});
      socket.removeAllListeners("USER_SOCKET_ID");
      socket.removeAllListeners("SIGN_IN");
      socket.removeAllListeners("PRIVATE_MESSAGE");
    });  

    socket.on("SIGN_IN",payload =>{
      console.log(payload.id + " " + payload.email + " signed in")
      setSocketId(payload.id,payload.socketId)
      // setSocketId(payload.id,payload.socketId)
      // console.log(payload);
      io.emit("SIGN_IN",{id:payload.id,email:payload.email});
    });  

    socket.on("disconnect",() =>{
      console.log(socket.id + " is disconnecting...");
    })


    socket.on("PRIVATE_MESSAGE", async (payload) =>{
      if(payload.to === 0){
        return
      }
      // socket.to(anotherSocketId).emit("private message",msg,user);
      const anotherSocket= await getSocketIdAndLanguage(payload.to);
      let transMessage="";
      if(anotherSocket.language!==""){
        transMessage=await translateMessage(payload.message,anotherSocket.language);
      }
      storeMessage(payload.from,payload.to,{message:payload.message,translatedMessage:transMessage.translatedMessage})
      console.log("TRANSMESAGE",transMessage);
      console.log(payload);
      // console.log(anotherSocket.socketId);
      socket.to(anotherSocket.socketId).emit("PRIVATE_MESSAGE",{...payload,translatedMessage:transMessage.translatedMessage});
    });

//     socket.on('clientToServerMessage', ({user, message, friend, room}) => {
//         console.log('hello world');

//         socket.join(room);
//         io.to(room).emit("serverToClientMessage", {user, message, friend});

//         console.log(user, message);
//         io.emit("serverToClientMessage", {user, message});
//     })
});

io.on("disconnect",socket =>{
  console.log(socket.id + " is disconnecting...");
})


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});