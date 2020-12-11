import dotenv from 'dotenv-safe'

export default function loadEnvironmentalVariables() {
  dotenv.config({
    path: `${__dirname}/.env`,
    sample: `${__dirname}/.env.example`
  })
}
