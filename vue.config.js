
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  assetsDir: 'static',
  configureWebpack: (config) => {
    config.externals = {
      vue: 'Vue',
      vuetify: 'Vuetify',
      axios: 'axios'
    }
    // gzip压缩
    config.plugins.push(new CompressionPlugin({
      algorithm: 'gzip',
      // eslint-disable-next-line prefer-regex-literals
      test: new RegExp('\\.(js|css|html|json)$'),
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }))
  },
  devServer: {
    inline: true
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
