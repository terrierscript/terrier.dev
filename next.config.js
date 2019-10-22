// @ts-nocheck
const withImages = require("next-images")
const { getMarkdownFiles } = require("./src/markdown/files.js")

module.exports = withImages({
  publicRuntimeConfig: {
    conf: "ping"
    // files: getMarkdownFiles()
  },
  webpack: config => {
    config.plugins = config.plugins.filter(plugin => {
      if (plugin.constructor.name === "ForkTsCheckerWebpackPlugin") return false
      return true
    })
    // config.module.rules.push({
    //   test: /\.md$/,
    //   use: "raw-loader"
    // })
    config.node = { fs: "empty" }
    return config
  },
  exportPathMap: async defaultPathMap => {
    console.log(defaultPathMap)
    const files = getMarkdownFiles()
    return {
      ...defaultPathMap
      //     "/": { page: "/" }
    }
  }
})
