const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/angelamiaogu.github.io/' : '',
  basePath: isProd ? '/angelamiaogu.github.io' : '',
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  output: 'export',
};

export default nextConfig;