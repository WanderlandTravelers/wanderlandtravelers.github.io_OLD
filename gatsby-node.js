var ResponsiveImageListPlugin = require("./plugins/responsive-image-list-plugin")

exports.modifyWebpackConfig = function (config, env) {
  config.plugin('responsive-image-list', ResponsiveImageListPlugin, ['./images/background', "./components/responsive-images.js"])

  config.removeLoader('images')
  config.loader('images', {
    test: /\.(jpe?g|png|gif)(\?.*)?$/i,
    loaders: env == 'develop' ? ['url-loader?limit=10000'] : [
      'url-loader?limit=10000',
      'responsive-loader',
      'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "99-100", speed: 4}}',  // eslint-disable-
    ],
  })
  config.removeLoader('file-loader')
  config.loader('file-loader', {
    test: /\.(ico|eot|otf|webp|ttf|svg)(\?.*)?$/,
    loader: 'file',
  })
  return config
}
