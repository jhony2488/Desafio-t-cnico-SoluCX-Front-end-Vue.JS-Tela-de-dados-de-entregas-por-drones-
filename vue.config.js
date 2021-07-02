/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/* eslint-disable no-param-reassign */
module.exports = {
  devServer: { host: 'localhost', port: '8080' },
  configureWebpack: (config) => {
    // get a reference to the existing ForkTsCheckerWebpackPlugin
    const existingForkTsChecker = config.plugins.filter(
      (p) => p instanceof ForkTsCheckerWebpackPlugin
    )[0]

    // remove the existing ForkTsCheckerWebpackPlugin
    // so that we can replace it with our modified version
    config.plugins = config.plugins.filter((p) => !(p instanceof ForkTsCheckerWebpackPlugin))

    // copy the options from the original ForkTsCheckerWebpackPlugin
    // instance and add the memoryLimit property
    const forkTsCheckerOptions = existingForkTsChecker.options
    forkTsCheckerOptions.memoryLimit = 12192

    config.plugins.push(new ForkTsCheckerWebpackPlugin(forkTsCheckerOptions))
  },
}
