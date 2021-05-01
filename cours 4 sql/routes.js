let express = require('express');
let router = express.Router();

let userController = require('./controllers/userController');

//Liste des routes vers les contrôleurs
router.get('/', (req, res) => res.redirect('/user'));

router.get('/user',userController.userList);
router.get('/user/add', userController.userFormAdd);
router.get('/user/remove/:idUser', userController.userRemove);
router.get('/user/update/:idUser', userController.userUpdate);

router.post('/user/update', userController.userShowUpdate);

router.post('/user/new', userController.userNew);

module.exports = router;