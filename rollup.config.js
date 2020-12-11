import autoExternal from 'rollup-plugin-auto-external'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es'
    },
    plugins: [
      autoExternal()
    ]
  },
  {
    input: 'src/environment.js',
    output: {
      file: 'environment.js',
      format: 'es'
    },
    plugins: [
      autoExternal()
    ]
  }
]
