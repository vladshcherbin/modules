import resolve from '@rollup/plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'es'
    },
    plugins: [
      resolve(),
      autoExternal()
    ]
  },
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
