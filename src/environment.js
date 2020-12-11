import dotenv from 'dotenv-safe'

dotenv.config({
  path: `${__dirname}/.env`,
  sample: `${__dirname}/.env.example`
})
