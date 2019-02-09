var Player = require('../models/Player')
var PlayerCluster = {};

PlayerCluster.getAll = function () {
    var p = new Promise(function (resolve,reject) {
        new Game().fetchAll().then(function(games) {

            resolve(games.toJSON())
        }).catch(function(error) {
            console.log(error);
            console.log('An error occured');
        });
    });

    return p;
}
PlayerCluster.findOne = function (code) {
    
    var p = new Promise(function (resolve,reject) {
        new Player().where({
            id: code
        }).fetch({withRelated:['playeraccount']}).then(function(player) {
            resolve(player.toJSON())
        }).catch(errorFunc);
    });

    return p;
}
PlayerCluster.create = function (data) {
    var p = new Promise(function (resolve,reject) {
        new Player({
            'code':0904,
            'email':data.email,
            'firstname':data.firstname,
            'lastname':data.lastname,
           // 'datejoined':data.datejoined,
            'walletid':data.walletid,
            'token':data.token,
            
        }).save().then(function(player) {

            resolve(player.toJSON())
        }).catch(errorFunc);
    });

    return p;
}

function errorFunc(error){
        console.log(error);
        console.log('An error occured');
}
module.exports = PlayerCluster;