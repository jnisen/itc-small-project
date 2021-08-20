
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('<h1>Good App</h1>')
})

app.listen(port, ()=> console.log('App Listening on port', port))