# starter-sage-x

Starter for [Sage 10](https://github.com/roots/sage/tree/10.0.0-dev) that removes Sass, Bootstrap and jQuery.

Sass is replaced with [PostCSS](https://postcss.org/). 

### Dependencies

* [tailwindcss](https://tailwindcss.com/)
  * PostCSS utility first CSS framework
* [postcss-present-env](https://preset-env.cssdb.org/)
  * PostCSS preset env converts modern CSS into something most browsers can understand, determine polyfills based on targeted browsers or runtime environments
* [postcss-import](https://github.com/postcss/postcss-import)
  * PostCSS import allows for `@import`

### Installation

```shell
$ git clone https://github.com/soberwp/starter-sage-x starter-sage-x
```

**Files and folders to replace:**
  * `resources/styles/*`
  * `resources/scripts/app.js`
  * `tailwind.js`
  * `webpack.min.js`

```shell
$ yarn remove jquery bootstrap popper.js sass sass-loader
```

```shell
$ yarn add tailwindcss postcss-import postcss-preset-env
```

### Bonus!

Fluid type is common for font sizes. Tailwind does not offer this out the box, but you can add support using [postcss-range-value](https://github.com/soberwp/postcss-range-value)

```shell
$ yarn add postcss-range-value postcss-root-parse-var
```

Remove comments under `webpack.mix.js` for the below;
```js
require('postcss-root-parse-var'),
require('postcss-range-value')({ screenMin: '48rem', screenMax: '100rem' }),
```

Remove comments and review utilities under [resources/styles/_utils/fl-text.css](https://github.com/soberwp/starter-sage-x/blob/master/resources/styles/_utils/fl-text.css)

Now you can use fluid type using a utility class like `fl:text-xl`.
