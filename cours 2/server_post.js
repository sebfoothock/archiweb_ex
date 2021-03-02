//import express
let express = require('express');

//initialize the app
let app = express();

//permettre de décomposer le corps du texte en variable (remplace les éléments dans l'URL du GET)
app.use(express.urlencoded());

/* //send message for default URL
app.get('/',(req,res) => {
    res.render('form.ejs');
})

app.post('/',(req, res)=> {
    console.log(req.body);
    res.send("Hello " + req.body.myname)
})
 */

 let routes = require('./mesroutes');
 app.use('/',routes);

//launch app to listen to specified port
app.listen(8000, function(){
    console.log('Running on port 8000');
})