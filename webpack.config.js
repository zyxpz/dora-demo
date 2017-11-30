var webpack = require('atool-build/lib/webpack');

module.exports = function (webpackConfig) {

  webpackConfig.plugins.some(function (plugin, i) {
    if (plugin instanceof webpack.optimize.CommonsChunkPlugin) {
      webpackConfig.plugins.splice(i, 1);

      return true;
    }
    return null;
  });

  webpackConfig.plugins.push(
    new webpack.ProvidePlugin({
      $: 'anima-yocto'
    })
  )

  webpackConfig.plugins.some(function (plugin, i) {
    if ((plugin instanceof webpack.optimize.CommonsChunkPlugin) || plugin.constructor.name === 'CommonsChunkPlugin') {
      webpackConfig.plugins.splice(i, 1, new webpack.optimize.CommonsChunkPlugin('yocto', 'yocto.js'));

      return true;
    }
  });

  return webpackConfig;
};
