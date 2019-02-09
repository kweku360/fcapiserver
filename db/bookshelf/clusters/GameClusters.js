var Game = require('../models/Game')
var GameCluster = {};

GameCluster.getAll = function () {
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

module.exports = GameCluster;