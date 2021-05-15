const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('whats up')
});

app.get('/animals', (req, res) => {
    res.json(['john', 'sally']);
});


// Listen for requests
app.listen(port, () => {
    console.log(`app listening on port:${port}`)
})