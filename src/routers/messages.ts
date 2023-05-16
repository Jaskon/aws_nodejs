import express from 'express';
const app = express.Router();
import { messageStorage } from '../modules/chat/message-storage';

app.get('/messages', (req, res, next) => {
    res.json(messageStorage);
    next();
});

export default app;
