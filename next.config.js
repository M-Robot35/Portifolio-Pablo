const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@ant-design/icons']);

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = withPlugins([withTM], {
  // Outras configurações do Next.js aqui
});