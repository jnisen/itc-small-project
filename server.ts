const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

// app.use(express.static('public'))
// app.use(express.static('public/dist'))

const userRouter = require('./routes/userRoute')
app.use('/user',userRouter)

app.listen(port, ()=> console.log('App Listening on port', port))