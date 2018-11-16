
/* eslint-disable */
const webpack = require('webpack')
const pkg = require('./package.json')

const H5_VERSION = JSON.stringify(pkg.version)

module.exports = {
  // 选项...
  // 打包文件路径 同output.publicPath
  baseUrl: './',
  assetsDir: pkg.version,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          API_ENV: JSON.stringify(process.env.API_ENV),
          H5_VERSION: H5_VERSION,
        },
      }),
    ],
  },
}
