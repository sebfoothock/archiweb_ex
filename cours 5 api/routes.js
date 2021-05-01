let express = require('express');
let router = express.Router();

let userController = require('./controllers/userController');
let userControllerApi = require('./controllers/userControllerApi');

//Liste des routes vers les contrôleurs
router.get('/', (req, res) => res.redirect('/user'));

router.get('/user',userController.userList);
router.get('/user/add', userController.userFormAdd);
router.post('/user/new', userController.userNew);
router.get('/user/remove/:idUser', userController.userRemove);
router.get('/user/update/:idUser', userController.userUpdate);
router.post('/user/update', userController.userShowUpdate);

/****** API ***********/

router.get('/api/user',userControllerApi.userList);
router.post('/api/user', userControllerApi.userNew);
router.get('/api/getUser/:idUser', userControllerApi.getUser);
router.put('/api/user', userControllerApi.userDoUpdate);//Put est a utiliser pour les mises à jour
router.delete('/api/deleteUser/:idUser', userControllerApi.userDelete);


module.exports = router;