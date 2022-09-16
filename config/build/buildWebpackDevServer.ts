import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

export function buildWebpackDevServer(): DevServerConfiguration{
  return {
    open: true,
    historyApiFallback: true
  }
}