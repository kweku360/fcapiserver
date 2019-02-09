'use strict'
const gamerunner = require('../example/gamerunner')
const dbtest = require('../example/dbtest')

module.exports = function (fastify, opts, next) {
  fastify.get('/example', function (request, reply) {
    reply.send('this is lazy dog')
  })

  fastify.get('/dbtest', dbtest)

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
