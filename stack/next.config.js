const { remarkCodeHike } = require('@code-hike/mdx')
const theme = require('shiki/themes/github-dark.json') 

module.exports = {
  generateBuildId: () => 'build',
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: false , showCopyButton: true }]]
            }
          }
        ]
      }
    ]
    config.resolve.fallback = {
      fs: false,
      path: false,
      assert: ['assert'],
      stream: ['stream-browserify'],
      crypto: ['crypto-browserify'],
      http: ['stream-http'],
      https: ['https-browserify'],
      os: ['os-browserify'],
    }
    return config
  }
}
