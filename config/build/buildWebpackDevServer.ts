import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import { BuildOptions } from "./types"

export function buildWebpackDevServer({ port }: BuildOptions): DevServerConfiguration {
  return {
    open: true,
    historyApiFallback: true,
    port
  }
}