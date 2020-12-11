import knex from 'knex'
import logger from 'knex-query-logger'
import { Model } from 'objection'

const knexConnection = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL
})

export default function connectDatabase() {
  Model.knex(knexConnection)

  if (process.env.NODE_ENV === 'development') {
    logger(knexConnection)
  }
}
