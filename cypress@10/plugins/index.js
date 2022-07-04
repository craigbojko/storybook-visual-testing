module.exports = async (on, config) => {
  if (config.testingType === 'component') {
    const {startDevServer} = require('@cypress/webpack-dev-server');
    
    // Your project's Webpack configuration
    const webpackConfig = require('../../webpack.config.js');
    
    on('dev-server:start', (options) => startDevServer({options, webpackConfig}));
  }

  // const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
  // getCompareSnapshotsPlugin(on, config);

  const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
  getCompareSnapshotsPlugin(on, config)
};
