const path = require('path');
const { createServer } = require('http');
const cors = require('cors');
const express = require('express');
const messagesRoute = require('./routes/messages');
const { Server } = require('socket.io');
const { onSocketConnect } = require('./modules/chat/socket');

const port = 3000;
const app = express();
const httpServer = createServer(app);


// CORS
app.use(cors({ origin: 'http://localhost:3001' }));

app.get('/users', (req, res, next) => {
    res.json([
        { id: '1', name: 'John', surname: 'Cena'},
        { id: '2', name: 'Michael', surname: 'Jackson'},
        { id: '3', name: 'Alan', surname: 'Damn'},
    ]);
    next();
});

app.use(express.static(path.join(__dirname, '../frontend-app/build')));
app.use(messagesRoute);


// Socket.io
const io = new Server(httpServer, {
    serveClient: false,
    transports: ['websocket'],
});
io.on('connection', socket => { onSocketConnect(socket, io) });


httpServer.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
