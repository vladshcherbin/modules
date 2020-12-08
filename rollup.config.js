import autoExternal from 'rollup-plugin-auto-external'

export default {
  input: {
    environment: 'src/environment/index.js'
  },
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    autoExternal()
  ]
}
