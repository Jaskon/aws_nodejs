import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
import { createServer } from 'http';
import cors from 'cors';
import express from 'express';
import { Server } from 'socket.io';
import session from 'express-session';
import { messagesRouter } from './routers';
// import csrf from 'csurf';
import { githubOauthRouter } from './modules/auth';
import { onSocketConnect } from './modules/chat/socket';
import { redisStore } from './connections/redis';
import appConfig, { ENV } from './app-config';
import passport from "passport";
import { devLocalCors, devProxyForReact } from './dev-env-init/express-app';


const port = appConfig.port;
const app = express();
const httpServer = createServer(app);

// DEV
if (appConfig.env === ENV.dev) {
    devLocalCors(app);
    devProxyForReact(app);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend-app/build')));
app.use(session({
    secret: appConfig.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: redisStore,
}));
// app.use(csrf());
app.use(passport.authenticate('session'));

app.get('/users', (req, res, next) => {
    res.json([
        { id: '1', name: 'John', surname: 'Cena'},
        { id: '2', name: 'Michael', surname: 'Jackson'},
        { id: '3', name: 'Alan', surname: 'Damn'},
    ]);
    next();
});

app.use(messagesRouter);
app.use(githubOauthRouter);


// Socket.io
const io = new Server(httpServer, {
    serveClient: false,
    transports: ['websocket'],
});
io.on('connection', socket => { onSocketConnect(socket, io) });


httpServer.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
