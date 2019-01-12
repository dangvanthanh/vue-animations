const postcssNormalize = require('postcss-normalize');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssNormalize({
      forceImport: true
    }),
    postcssImport(),
    tailwindcss('./tailwind.js'),
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions'
    })
  ]
};
