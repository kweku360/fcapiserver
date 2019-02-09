var bookshelf = require('../config');

var Game = bookshelf.Model.extend({
    tableName: 'game'
});

module.exports = Game;