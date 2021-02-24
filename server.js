const http = require('http');
const express  = require('express');
const app = express();

app.set('view engie', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})
// Start the server on port 7000
const server = app.listen(7000);