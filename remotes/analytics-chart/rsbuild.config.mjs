import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  server: {
    port: 4001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'analytics_chart'
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'analytics_chart',
          exposes: {
            './App': './src/App.jsx',
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: '^18.3.1',
              fixedDependencies: true,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: '^18.3.1',
              fixedDependencies: true,
            },
          },
        }),
      ],
    },
  },
});