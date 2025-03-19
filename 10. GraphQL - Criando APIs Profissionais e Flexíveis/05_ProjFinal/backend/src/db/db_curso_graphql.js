import knex from 'knex'
import config from '../../knexfile.js'

export const dataBase = knex(config)
