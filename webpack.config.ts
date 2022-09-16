import path from 'path'
import webpack from 'webpack'
import { BuildPaths } from './config/build/types'
import { buildWebpackConfig } from './config/build/bulidWebpackConfig'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build')
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev
})

export default config