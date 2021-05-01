let User = require('../models/userModel');

let userList = [];

exports.userList = function (req,res){
    let user = new User("Dupont","Paul");
    userList.push(user);
    res.render('userList.ejs', {users : userList});
}

exports.userFormAdd = function(req, res) {
    res.render('userAdd.ejs', {idUser: -1 , lastName: "", firstName:""});
}

exports.userUpdate = function(req, res){
    let idUser = req.params.idUser;

    res.render('userAdd.ejs', {idUser:idUser, lastName:userList[idUser]["lastName"], firstName:userList[idUser]["firstName"]});
}

exports.userNew = function (req, res){
    let idUser = req.body.idUser;
    let lastName = req.body.lastName;
    let firstName = req.body.firstName;

    if(idUser >= 0){
        userList[idUser]['lastName'] = lastName;
        userList[idUser]['firstName'] = firstName;
    }
    else{
        let user = new User(lastName,firstName);
        userList.push(user);
    }

    res.redirect('/user');
}

exports.userShow = function (req, res) {
    let idUser = req.params.idUser;

    res.send('Hello ' + userList[idUser]['firstName']);
}

exports.userRemove = function(req, res){
    let idUser = req.params.idUser;

    userList.splice(idUser, 1);
    res.redirect('/user');
}

