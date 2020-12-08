import autoExternal from 'rollup-plugin-auto-external'

export default [
  {
    input: 'src/environment/index.js',
    output: {
      file: 'environment.js',
      format: 'es'
    },
    plugins: [
      autoExternal()
    ]
  }
]
