const {
    request,
    response
} = require('express');
let express = require('express');

let app = express();

//set route
app.get('/', (request, response) => {
    //response.send("Hello world");
    response.render('home.ejs', {name: "toto"})
})

//using url

app.get('/index', (request, response) => {
    /* response.send('Bonjour ' + request.query.name); */
    response.render('home.ejs', {name: request.query.name})
})

//using param

app.get('/index/:name', (request, response) => {
    /* response.send('Bonjour ' + request.params.name); */
    response.render('home.ejs', {name: request.params.name})
})

app.use(express.static('public'));


app.listen(3000, function () {
    console.log("server is running on port 3000");
})