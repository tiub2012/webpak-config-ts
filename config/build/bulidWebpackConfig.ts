import webpack from 'webpack'
import { BuildOptions } from "./types"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { buildWebpackDevServer } from "./buildWebpackDevServer"
import TerserPlugin from 'terser-webpack-plugin'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: buildWebpackDevServer(),
    plugins: buildPlugins(options),
    devtool: 'inline-source-map',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  }
}