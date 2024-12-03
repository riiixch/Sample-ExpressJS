const express = require('express');

const { log } = require('console');

const app = express();

app.use(express.static('public'));

app.set('views');
app.set('view engine', 'ejs');

app.use('/', (req, res) => {
    res.render('index');
});

app.post('/api/send-data', (req, res) => {
    const { message } = req.body;

    log(`Received message: ${message}`);
});

app.listen(8080, () => {
    log('[ExpressJS] Website listen port http://localhost:8080/');
});