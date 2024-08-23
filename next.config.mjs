/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['antd']
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'about',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true
        },
        shared: {
          antd: {
            requiredVersion: false,
            singleton: true
          },
          "@ant-design/cssinjs": {
            requiredVersion: false,
            singleton: true
          }
        },
      }),
    );

    return config;
  },
};


export default nextConfig;
