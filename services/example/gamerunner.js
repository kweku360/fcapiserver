'use strict'
const axios = require('axios')

module.exports = function (request, reply) {
    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function (response) {
            // handle success
           reply.send(response.data)
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

}