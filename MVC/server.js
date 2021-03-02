let express = require('express');

let app = express();

//permettre de décomposer le corps du texte en variable (remplace les éléments dans l'URL du GET)
app.use(express.urlencoded());

let router = require('./routes');
app.use('/',router);

//launch server
app.listen(3000, function () {
    console.log("server is running on port 3000");
})