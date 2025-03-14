import dotenv from 'dotenv'
dotenv.config()

export default {

  client: 'postgresql',
  connection: {
    database: 'curso_graphql',
    user: process.env.user,
    password: process.env.password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './src/migrations',
    esm: true,
    tableName: 'knex_migrations'
  }

}
