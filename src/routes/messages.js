const express = require('express');
const app = express.Router();
const { messageStorage } = require('../modules/chat/message-storage');

app.get('/messages', (req, res, next) => {
    res.json(messageStorage);
    next();
});

module.exports = app;
