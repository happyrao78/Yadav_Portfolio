/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
});
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../../public/Audio/audio.mp3',
            outputPath: '../../public/Audio/audio.mp3',
          },
        },
      });
    }

    return config;
  },
};


