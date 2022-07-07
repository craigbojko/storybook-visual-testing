const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  component: {
    specPattern: 'tests/**/*.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      on('after:run', (results) => {
        cy.task('generateReport')
      })
    },
    screenshotsFolder: './cypress/snapshots',
    trashAssetsBeforeRuns: true,
  },
  env: {
    failSilently: false,
  },
})
