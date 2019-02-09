var PlayerAccount = require('../models/PlayerAccount')
var PlayerAccountCluster = {};

PlayerAccountCluster.getAll = function () {
    var p = new Promise(function (resolve, reject) {
        new Game().fetchAll().then(function (games) {

            resolve(games.toJSON())
        }).catch(function (error) {
            console.log(error);
            console.log('An error occured');
        });
    });

    return p;
}

PlayerAccountCluster.findOne = function (code) {
    var p = new Promise(function (resolve, reject) {

        new PlayerAccount().where({
            fplteamcode: code
        }).fetch().then(function (playeraccount) {
           // console.log(playeraccount)
            if(playeraccount == null){
                resolve({type:"true",sdata:""})
            }else{
                resolve({type:"false",sdata:playeraccount.toJSON()})
            }
            // resolve(games.toJSON())
        }).catch(errorFunc);
    });

    return p;
}

PlayerAccountCluster.create = function (data) {
    var p = new Promise(function (resolve, reject) {
        new PlayerAccount({
            'email': data.email,
            'credential': data.credential,
            'fplteamcode': data.fplteamcode,
            'teamname': data.teamname,
            'fullname': data.fullname,
            'region': data.region,
            'regioncode': data.regioncode,
            'eplteam': data.eplteam,
           // 'datejoined': data.datejoined,
          //  'lastmodified': data.datemodified,
            'playerid': data.playerid, 

        }).save().then(function (playeraccount) {
            resolve(playeraccount.toJSON())
        }).catch(errorFunc);
    });

    return p;
}

function errorFunc(error) {
    console.log(error);
    console.log('An error occured');
}
module.exports = PlayerAccountCluster;