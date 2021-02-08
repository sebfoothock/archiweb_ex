let express = require('express');

let app = express();

var todo = ["Faire les courses", "Nourir le chat"];

var message = '';

//route todo.ejs
app.get('/todo', function (request, response) {
    response.render('todo.ejs', {listTodo : todo, msg: message})
})

//add task
app.get('/todo/new', function (request, response) {
    var task = request.query.todoInput;
    console.log(task);
    todo.push(task);
    message = "Ajout réussi";
    response.redirect('/todo');
})

//delete task
app.get('/todo/:id', function (request, response) {
    todo.splice(request.query.todoInput,1);
    console.log(todo);
    message = "Suppression réussi";
    response.redirect('/todo');
})

//launch server
app.listen(3000, function () {
    console.log("server is running on port 3000");
})