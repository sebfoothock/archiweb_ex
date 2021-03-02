let User = require('../models/taskModel');

var todoList = ["Faire les courses", "Nourir le chat"];

var message = '';

exports.todoList = function(req, res){
    res.render('todo.ejs', {tasks : todoList, msg: message});
}

exports.addTask = function (request, response) {
    let task = request.body.todoInput;
    console.log(task);
    todoList.push(task);
    message = "Ajout réussi";
    response.redirect('/todo');
}

exports.removeTask = function (request, response) {
    todoList.splice(request.body.todoInput,1);
    console.log(todoList);
    message = "Suppression réussi";
    response.redirect('/todo');
}  