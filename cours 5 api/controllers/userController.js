const { Connection } = require('puppeteer');
/* let User = require('../models/userModel'); */
let connection = require('../db')

exports.userList = function (req,res){
    connection.query("select * from users.user;", function(error, result){
        if(error){
            console.log(error);
        }
        res.render('userList.ejs', {users: result});
    });
}

exports.userFormAdd = function(req, res) {
    res.render('userAdd.ejs');
}

exports.userNew = function (req, res){
    let user = {"lastName":req.body.lastName, "firstName": req.body.firstName};
    console.log(user);
    connection.query("Insert into users.user set ?;", user, function(error, resultSQL){//le ? est remplacé par user
        if(error){
            response.status(400).send(error);
        }
        else{
            /* response.status(201).redirect('/user'); */
            res.redirect('/user');
        }
    });
}

exports.userUpdate = function(req, res){
    let idUser = req.params.idUser;
    connection.query("select * from user Where idUser = ?;", idUser, function(error, result){//le ? est remplacé par user
        if(error){
            console.log(error);
        }
        else{
            /* response.status(201).redirect('/user'); */
            res.render('userUpdate.ejs', {"idUser" : result[0].idUser, "lastName" : result[0].lastName, "firstName" : result[0].firstName});
        }
        console.log(result);
    });
}

exports.userShowUpdate = function(req, res){
    let idUser = req.body.idUser;
    let user = {"lastName":req.body.lastName, "firstName": req.body.firstName};
    connection.query("update users.user set ? where idUser = ?;", [user,idUser] , function(error, resultSQL){//le ? est remplacé par user
        if(error){
            console.log(error);
        }
        else{
            /* response.status(201).redirect('/user'); */
            res.redirect('/user');
        }
    });
}

exports.userRemove = function(req, res){//pourquoi il ne faut pas faire de post pour le remove ?
    let idUser = req.params.idUser;
    connection.query("delete from users.user Where idUser = ?;", idUser, function(error, result){//le ? est remplacé par user
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/user');
        }
    });
}

