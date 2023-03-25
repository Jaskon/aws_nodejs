const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;


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

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
