var Bookshelf = require('../config');
Bookshelf.plugin('registry')

var Player = require("../models/Player")

var PlayerAccount = Bookshelf.Model.extend({
    tableName: 'playeraccount',
    player: function() {
        return this.belongsTo('Player','playerid');
      }
});

module.exports = Bookshelf.model('PlayerAccount', PlayerAccount);