# sass-starter

Config and utility first starter powered using [sass-tools](https://github.com/soberwp/sass-tools).

## Installation

Clone into your styles directory;

```shell
$ git clone https://github.com/soberwp/sass-starter styles
```

Install [sass-tools](https://github.com/soberwp/sass-tools);

```shell
$ yarn add @soberwp/sass-tools
```

## Overview

```shell
├── _config/
│   ├── _breakpoints.scss
│   ├── _colors.scss
│   ├── _font-faces.scss
│   ├── _font-sizes.scss
│   └── _ratios.scss
├── _tools/
│   ├── _get-break.scss
│   ├── _get-color.scss
│   ├── _get-font-size.scss
│   └── _get-ratio.scss
├── _utils/
│   ├── _flex.scss
│   ├── _layout.scss
│   └── _sizing.scss
├── base/
│   ├── _elements.scss
│   ├── _forms.scss
│   ├── _lists.scss
│   ├── _media.scss
│   ├── _tables.scss
│   └── _text-formatting.scss
└── main.scss
```

## Config

Declare config maps and place them in `_config/`

### Breakpoints

**Config:** [`_config/_breakpoints.scss`](_config/_breakpoints.scss)

**Usage:**
```scss
@include mq(sm) {}
```

For more usage options and to better understand `@include mq()` head over to [sass-tools/mq](https://github.com/soberwp/sass-tools/blob/master/.github/mq.md).

### Colors

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

**Usage:**
```scss
color: get-color(primary); // returns base
color: get-color(primary, tone1);
```

### Font sizes

**Config:** [`_config/_font-sizes.scss`](_config/_font-sizes.scss)

Create fluid font sizes using [sass-fs](https://github.com/soberwp/sass-tools/blob/master/.github/fs.md) or get a fixed font size.

**Usage:**
```scss
// use a fluid font size from $font-sizes, downscaling using its ratio
@include fs(xx);

// use a standard fixed font size from $font-size
font-size: get-font-size(xx);
```

For more usage options and to better understand `@include fs()` head over to [sass-tools/fs](https://github.com/soberwp/sass-tools/blob/master/.github/fs.md).

### Ratios

**Config:** [`_config/_ratios.scss`](_config/_font-sizes.scss)

Ratios are useful when working with `@include fs()` and `@include fl()`

**Usage:**
```scss
// fluid font size with ratio from $ratios
@include fs(xx, get-ratio(lg));

// fluid css prop with ratio from $ratios
@include fl(margin-bottom, 2rem, get-ratio(lg));
```

For more usage options and to better understand `@include fl()` head over to [sass-tools/fl](https://github.com/soberwp/sass-tools/blob/master/.github/fl.md).

## Utils

Declare reusable CSS props and place them in `_utils/`. 

* [`_utils/_flex.scss`](_utils/_flex.scss)
* [`_utils/_layout.scss`](_utils/_layout.scss)
* [`_utils/_sizing.scss`](_utils/_sizing.scss)

**Usage:**
```scss
// include utility props in your class
.flex-center {
  @include util(flex flex-wrap items-center justify-center);
}
```

Build utility classes from utility maps. All utility classes are prefixed with breakpoints defined in `$breakpoints`.

```scss
@include make-classes();
// creates classes flex sm:flex mq:flex lg:flex xl:flex, etc
```

**Tip:** Create utility classes at the end of your main.scss in order to take preference over other classes.

For more usage options head over to [sass-tools/util](https://github.com/soberwp/sass-tools/blob/master/.github/util.md) or get [more utility presets](https://github.com/soberwp/sass-tools/tree/master/util-presets).

## Base

Base has been inspired from well documented browser resets [normalize.css](https://github.com/necolas/normalize.css/) and [wipe.css](https://github.com/danilowoz/wipe.css). 

Alternatively, you can remove this folder and add a normalize/reset library of your choice.

## Over to you

Using the above tools, build out your components, layouts and templates.
