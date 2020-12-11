import dotenv from 'dotenv-safe'

export default function loadEnvironmentalVariables(directory) {
  dotenv.config({
    path: `${directory}/.env`,
    sample: `${directory}/.env.example`
  })
}
