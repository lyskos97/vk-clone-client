const resolve = require('resolve');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: '../dist',
  webpack: (config, { isServer, dir }) => {
    config.externals = [];

    if (isServer) {
      config.externals.push((ctx, req, cb) => {
        resolve(req, { baseDir: dir, preserveSymlinks: true }, (err, res) => {
          if (err) {
            return cb();
          }

          // if (
          //   // res.match(/node_modules[/\\].*\.js/) &&
          //   // !res.match(/node_modules[/\\]webpack/) &&
          //   // !res.match(/node_modules[/\\]ui/)
          //   // !res.match(/node_modules[/\\]react-flexbox-grid/)
          // ) {
          //   return cb(null, `commonjs ${req}`);
          // }

          cb();
        });
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        'babel-loader',
        {
          loader: 'react-svg-loader',
          options: { jsx: true },
        },
      ],
    });

    return config;
  },
});
