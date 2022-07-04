const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    specPattern: 'tests/**/*.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})
