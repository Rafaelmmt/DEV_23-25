require('dotenv').config()

module.exports = {
  
  client: 'postgresql',
  connection: {
    database: 'db_graphql',
    user: process.env.user,
    password: process.env.senha
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
  
}
