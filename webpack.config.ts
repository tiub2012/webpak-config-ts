import path from 'path'
import webpack from 'webpack'
import { BuildEnv, BuildPaths } from './config/build/types'
import { buildWebpackConfig } from './config/build/bulidWebpackConfig'


export default (env: BuildEnv): webpack.Configuration => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
  }
  
  const PORT = env.port || 3002
  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}