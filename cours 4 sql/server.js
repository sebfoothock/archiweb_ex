//import express
let express = require('express');
require('dotenv').config();

//initialize the app
let app = express();

app.use(express.urlencoded({extended:true}));

let router = require('./routes');
app.use('/', router);

//launch app to listen to specified port
app.listen(7000, function(){
    console.log('Running on port 7000');
})