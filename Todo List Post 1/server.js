let express = require('express');

let app = express();

//permettre de décomposer le corps du texte en variable (remplace les éléments dans l'URL du GET)
app.use(express.urlencoded());

/* //route todo.ejs
app.get('/todo', function (request, response) {
    response.render('todo.ejs', {listTodo : todo, msg: message})
})

//add task
app.post('/todo/new', function (request, response) {
    var task = request.body.todoInput;
    console.log(task);
    todo.push(task);
    message = "Ajout réussi";
    response.redirect('/todo');
})

//delete task
app.post('/todo/remove', function (request, response) {
    todo.splice(request.body.todoInput,1);
    console.log(todo);
    message = "Suppression réussi";
    response.redirect('/todo');
}) */

let routes = require('./mesroutes');
app.use('/',routes);

//launch server
app.listen(3000, function () {
    console.log("server is running on port 3000");
})