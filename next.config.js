const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      include: path.resolve(__dirname, './assets/svg'),
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            dimensions: false,
            svgoConfig: {
              plugins: [
                'removeDoctype',
                'removeXMLProcInst',
                'minifyStyles',
                'sortAttrs',
                'sortDefsChildren',
                // {
                //   name: 'preset-default',
                //   params: {
                //     overrides: {
                //       removeViewBox: false,
                //       mergePaths: false,
                //       removeAttrs: false,
                //     },
                //   },
                // },
              ],
            },
          },
        },
        {
          loader: 'url-loader',
        },
      ],
    })
    return config
  },
}

module.exports = nextConfig
