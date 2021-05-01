const { Connection } = require('puppeteer');
/* let User = require('../models/userModel'); */
let connection = require('../db')

exports.userList = function (req,res){
    connection.query("select * from users.user;", function(error, result){
        if(error){
            res.status(400).json({'error': error});
        }
        else{
            res.status(200).json(result);
        }
    });
}

exports.userNew = function (req, res){
    let user = {"lastName":req.body.lastName, "firstName": req.body.firstName};
    console.log(user);
    connection.query("Insert into users.user set ?;", user, function(error, resultSQL){//le ? est remplacé par user
        if(error){
            res.status(400).json({'message': error});
        }
        else{
            res.status(200).json({'message': 'success'});
        }
    });
}

exports.getUser = function(req, res){
    let idUser = req.params.idUser;
    connection.query("select * from user Where idUser = ?;", idUser, function(error, result){//le ? est remplacé par user
        if(error){
            res.status(400).json({'message': error});
        }
        else{
            res.status(200).json(result);
        }
    });
}

exports.userDoUpdate = function(req, res){
    let idUser = req.body.idUser;
    let user = {"lastName":req.body.lastName, "firstName": req.body.firstName};
    connection.query("update users.user set ? where idUser = ?;", [user,idUser] , function(error, resultSQL){//le ? est remplacé par user
        if(error){
            res.status(400).json({'message': error});
        }
        else{
            res.status(200).json({'message': 'success'});
        }
    });
}

exports.userDelete = function(req, res){//pourquoi il ne faut pas faire de post pour le remove ?
    let idUser = req.params.idUser;
    connection.query("delete from users.user Where idUser = ?;", idUser, function(error, result){//le ? est remplacé par user
        if(error){
            res.status(400).json({'message': error});
        }
        else{
            res.status(200).json({'message': 'success'});
        }
    });
}