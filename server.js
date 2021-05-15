const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


// Setting static folder so css and js works
app.use(express.static('./Develop/public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('./Develop/public/index.html', { root: __dirname})
});

app.get('/notes', (req, res) => {
    res.sendFile('./Develop/public/notes.html', { root: __dirname})
});

app.get('/api/notes', (req, res) => {
    res.sendFile('./Develop/db/db.json', { root: __dirname})
});

app.post('/api/notes', (req, res) => {
    console.log('i got a request');
    console.log(req.body);

    
    const json = (req.body);
    
    fs.readFile("./Develop/db/db.json", (err, data) => {
        if (err) throw err;
        let jsonArray = JSON.parse(data);
        jsonArray.push(json);

        fs.writeFile("./Develop/db/db.json", JSON.stringify(jsonArray) , function (err) {
            if (err) throw err;
            console.log('The new Note was appended to db.json!');
         });
      });

    

    res.json({
        status: 'success'
    },
    
)})




// Listen for requests
app.listen(port, () => {
    console.log(`app listening on port:${port}`)
})