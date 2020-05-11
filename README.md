# sage-starter

Starter for [Sage 10](https://github.com/roots/sage/tree/10.0.0-dev) removing jQuery and replacing Bootstrap and Sass with Tailwind and PostCSS plugins.

### Dependencies

* [tailwindcss](https://tailwindcss.com/)
  * Utility first CSS framework
* [tailwindcss-fl](https://github.com/soberwp/tailwindcss-fl)
  * Extend TailwindCSS with fluid utility classes
* [postcss-present-env](https://preset-env.cssdb.org/)
  * PostCSS preset env converts modern CSS into something most browsers can understand
* [postcss-import](https://github.com/postcss/postcss-import)
  * PostCSS import allows for the use of `@import`

### Installation

```shell
$ git clone https://github.com/soberwp/sage-starter sage-starter
```

**Replace:**
  * `resources/styles/*`
  * `resources/scripts/app.js`
  * `tailwind.config.js`
  * `webpack.mix.js`

```shell
$ yarn remove jquery bootstrap popper.js sass sass-loader
```

```shell
$ yarn add tailwindcss tailwindcss-fl postcss-preset-env postcss-import
```
