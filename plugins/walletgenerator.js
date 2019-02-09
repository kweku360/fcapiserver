'use strict'

const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
  fastify.decorateRequest('walletid', function () {
    var walletid = Math.floor(new Date().valueOf() + Math.random());
    walletid = reverseInt(walletid)
    return walletid;
  })
  next()
})


function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('').slice(0,-3); // turn a number into a string, then turn it into an array to reverse. 
  return Math.sign(n) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
}