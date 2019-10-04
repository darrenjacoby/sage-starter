# reusecss

Config and utility driven proof of concept using [sass-tools](https://github.com/soberwp/sass-tools) for highly reusable CSS.

## Installation

Clone into your styles directory;

```shell
$ git clone https://github.com/soberwp/reusecss styles
```

Install sass-tools;

```shell
$ yarn add @soberwp/sass-tools
```

The only depedency is [sass-tools](https://github.com/soberwp/sass-tools) which includes a few basic helpers;

* [sass-util](https://github.com/soberwp/sass-util)
* [sass-get](https://github.com/soberwp/sass-get)
* [sass-fs](https://github.com/soberwp/sass-fs)
* [sass-fl](https://github.com/soberwp/sass-fl)

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
│   ├── _display.scss
│   └── _layout.scss
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

Decalre simple variables and place them in `_config/`

### Breakpoints

**Config:** [`_config/_breakpoints.scss`](_config/_breakpoints.scss)

**Usage:**
```scss
@media (min-width: get-break(sm)) {}
```

### Colors

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

**Usage:**
```scss
color: get-color(primary); // returns base by default
color: get-color(primary, tone1);
```

### Font sizes

**Config:** [`_config/_font-sizes.scss`](_config/_font-sizes.scss)

Create fluid font sizes using [sass-fs](https://github.com/soberwp/sass-fs) or get a fixed font size.

**Usage:**
```scss
// use a fluid font size from $font-sizes, downscaling using its ratio
@include fs(xx);

// use a standard fixed font size from $font-size
font-size: get-font-size(xx);
```

For more usage options when using `@include fs()` head over to the [sass-fs documentation](https://github.com/soberwp/sass-fs).

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

For more usage options and to better understand `@include fl()` head over to the [sass-fl documentation](https://github.com/soberwp/sass-fs).

### Create your own custom maps

Let's create a custom map and getter for transition durations.

**`_config/_durations.scss`**

```scss
$durations: (
  fast: 0.2s,
  base: 0.5s,
  slow: 1s,
);
```

**`_tools/_get-duration.scss`**

```scss
@function get-duration($duration) {
  // pass in the map and key to function get()
  @return get($durations, $duration);
}
```

**Usage:**
```scss
transition: color get-duration(slow) ease-in;
```

## Utils

Declare reusable CSS props and place them in `_utils/`. 

* [`_utils/_layout.scss`](_utils/_layout.scss)
* [`_utils/_flex.scss`](_utils/_flex.scss)
* [`_utils/_sizing.scss`](_utils/_sizing.scss)

Head over to [sass-utils](https://github.com/soberwp/sass-utils) to learn more or to get some more [presets](https://github.com/soberwp/sass-utils).

**Usage:**
```scss
// include utility props in your class
.flex-center {
  @include util(flex flex-wrap items-center justify-center);
}
```

Build utility classes from utility maps. All utility classes are prefixed with breakpoints defined in `$breakpoints`.

```scss
@include make-classes($utils);
// creates classes flex sm:flex mq:flex lg:flex xl:flex, etc
```

**Tip:** Create utility classes at the end of your main.scss in order to take preference over other classes.

## Base

Base has been inspired from well documented browser resets [normalisecss](https://github.com/necolas/normalize.css/) and [wipecss](https://github.com/danilowoz/wipe.css). Classes should not be defined under base.

You can chose to remove this folder and add a reset library of your choice.

## Over to you

Using the above tools for reusability, create your components, layouts and templates.
