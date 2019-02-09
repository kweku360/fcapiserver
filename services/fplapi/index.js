'use strict'
const auth = require('../fplapi/auth')
const dbtest = require('../example/dbtest')

module.exports = function (fastify, opts, next) {

  fastify.post('/authteaminfo', auth)

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/example', async function (request, reply) {
//     return 'this is an example'
//   })
// }
