var Bookshelf = require('../config');
Bookshelf.plugin('registry');

var PlayerAccount = require("../models/PlayerAccount")

Player= Bookshelf.Model.extend({
    tableName: 'player',
    playeraccount: function() {
        return this.hasMany('PlayerAccount','playerid');
      }
});
module.exports = Bookshelf.model('Player', Player);