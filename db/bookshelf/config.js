var knex = require('knex')({
    client: 'pg',
    connection: {
        host     : '127.0.0.1',
        user     : 'postgres',
        password : 'postgres',
        database : 'FantasyCup',
        charset  : 'utf8'
    }
});


module.exports = require('bookshelf')(knex);
