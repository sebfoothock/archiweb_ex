//import express
let express = require('express');

//initialize the app
let router = express.Router();

var todo = ["Faire les courses", "Nourir le chat"];

var message = '';

//route todo.ejs
router.get('/todo', function (request, response) {
    response.render('todo.ejs', {listTodo : todo, msg: message})
})

//add task
router.post('/todo/new', function (request, response) {
    var task = request.body.todoInput;
    console.log(task);
    todo.push(task);
    message = "Ajout réussi";
    response.redirect('/todo');
})

//delete task
router.post('/todo/remove', function (request, response) {
    todo.splice(request.body.todoInput,1);
    console.log(todo);
    message = "Suppression réussi";
    response.redirect('/todo');
})

module.exports = router;