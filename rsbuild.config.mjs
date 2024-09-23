import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  server: {
    port: 4000,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            analytics_chart:
              'analytics_chart@http://localhost:4001/mf-manifest.json',
              setting_app:
              'setting_app@http://localhost:4004/mf-manifest.json',
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