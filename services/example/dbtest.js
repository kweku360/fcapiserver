'use strict'
const GameCluster = require('../../db/bookshelf/clusters/GameClusters')

module.exports = function (request, reply) {
    GameCluster.getAll().then(function(users) 
    {reply.send(users)});
}