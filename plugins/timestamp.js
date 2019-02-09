'use strict'

const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
  fastify.decorateRequest('timestamp', function () {
    var date = new Date(); 
    var timestamp = Math.round(new Date().getTime()/1000);
    return timestamp;
  })
  next()
})
