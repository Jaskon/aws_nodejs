const express = require('express');
const app = express.Router();
const { messages } = require('../modules/chat/chat');

app.get('/messages', (req, res, next) => {
    res.json(messages);
    next();
});

module.exports = app;
