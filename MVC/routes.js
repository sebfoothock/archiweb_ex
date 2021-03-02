let express = require('express');
let router = express.Router();

let taskController = require('./controllers/taskController');

//Liste des routes vers les contrôleurs
router.get('/', (req, res) => res.redirect('/todo'));

router.get('/todo', taskController.todoList);

router.post('/todo/new', taskController.addTask);
router.post('/todo/remove', taskController.removeTask);

module.exports = router;