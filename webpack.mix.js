const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-purgecss');
require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */
mix
  .setPublicPath('./dist')
  .browserSync('sage.test');

mix
  .postCss('resources/assets/styles/app.css', 'styles')
  .postCss('resources/assets/styles/editor.css', 'styles')
  .options({
    postCss: [
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-preset-env')({ stage: 1 }),
    ],
  })
  .purgeCss({
    whitelist: require('purgecss-with-wordpress').whitelist,
    whitelistPatterns: require('purgecss-with-wordpress').whitelistPatterns,
  });

mix
  .js('resources/assets/scripts/app.js', 'scripts')
  .js('resources/assets/scripts/customizer.js', 'scripts')
  .blocks('resources/assets/scripts/editor.js', 'scripts')
  .extract();

mix
  .copyWatched('resources/assets/images/**', 'dist/images')
  .copyWatched('resources/assets/fonts/**', 'dist/fonts');

mix.options({ processCssUrls: false });

mix.sourceMaps(false, 'source-map').version();
