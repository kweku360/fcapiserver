'use strict'
const axios = require('axios')
const PlayerCluster = require('../../db/bookshelf/clusters/PlayerCluster')
const PlayerAccountCluster = require('../../db/bookshelf/clusters/PlayerAccountCluster')

module.exports = function (request, reply) {
    // var teamentryurl = "https://fantasy.premierleague.com/drf/entry/" + request.body.teamid
    var teamentryurl = "https://fantasy.premierleague.com/drf/entry/774551";
    //check if team already exists
    PlayerAccountCluster.findOne(774551).then(function(data){
        if(data.type == "false"){
            PlayerCluster.findOne(data.sdata.playerid).then(
                function(ndata){
                    reply.send(ndata);
                }
            )
        }
        if(data.type == "true"){
           
            make(teamentryurl,request)
        }
       //
    })

}

function make(teamentryurl,request){
    axios.get(teamentryurl)
        .then(function (response) {
            // handle success
            console.log(request.uuid());
            //we save player
            var data = {
                'email': response.data.entry.name,
                'firstname': response.data.entry.player_first_name,
                'lastname': response.data.entry.player_last_name,
                'datejoined':request.timestamp(),
                'walletid':request.walletid(),
                'token':request.uuid()
            }
            PlayerCluster.create(data).then(function (player) {
                var accountdata = {
                    'email': response.data.entry.name,
                    'credential': "hashfornow",
                    'fplteamcode': response.data.entry.id,
                    'teamname': response.data.entry.name,
                    'fullname': response.data.entry.player_first_name + " " + response.data.entry.player_last_name,
                    'region': response.data.entry.player_region_name,
                    'regioncode': response.data.entry.player_region_short_iso,
                    'eplteam': response.data.entry.favourite_team,
                    'datejoined': request.timestamp(),
                    'datemodified': request.timestamp(),
                    'playerid': player.id,
                }
                
                PlayerAccountCluster.create(accountdata).then(function(playeraccount){
                    PlayerCluster.findOne(playeraccount.playerid).then(
                        function(ndata){
                            
                            reply.send(ndata);
                        }
                    )
                } )
            });


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}