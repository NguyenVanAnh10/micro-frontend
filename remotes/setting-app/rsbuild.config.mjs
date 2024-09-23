import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    port: 4004,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'setting_app'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'setting_app',
          exposes: {
            './App': './src/app.js',
          }
        }),
      ],
    },
  },
});
