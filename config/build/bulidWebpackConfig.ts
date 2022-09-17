import webpack from 'webpack'
import { BuildOptions } from "./types"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { buildWebpackDevServer } from "./buildWebpackDevServer"
import TerserPlugin from 'terser-webpack-plugin'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: './js/[name].[contenthash:5].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildWebpackDevServer(options) : undefined,
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  }
}