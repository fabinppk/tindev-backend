const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3333;

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

mongoose.connect(
    'mongodb+srv://semana:semana@cluster0-pggb2.mongodb.net/omnistackTindev?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());

app.use(express.json());

app.use(routes);

server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});
