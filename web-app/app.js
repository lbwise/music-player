const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
});
