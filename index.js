require('dotenv')
.config();
const express = require('express');
const app = express();
const http = require('http');
const routes = require('./routes');
const mongoose = require('mongoose');

const PORT = 3002;

const server = http.createServer(app);

const io = require('socket.io')(server);

