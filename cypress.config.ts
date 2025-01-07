const { defineConfig } = require('cypress');
const vitePreprocessor = require('@cypress/vite-dev-server');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('dev-server:start', async (options) =>
        vitePreprocessor({
          configFile: 'vite.config.ts',
          ...options,
        })
      );
      return config;
    },
    baseUrl: 'http://localhost:5173',
    supportFile: 'cypress/support/e2e.ts',
  },
});
