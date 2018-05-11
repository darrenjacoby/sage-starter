# itcss-starter

Sass starter for longer lasting stylesheets with a single source of truth.

Configuration is placed in Sass maps at the top of the project, functions/mixins are then used to retrieve those values in your comps, layouts and views. 

This starter makes no assumptions on frontend frameworks, and only provides the config, utils and folder structure.

## Structure

```shell
├── _config/
│   ├── _breakspoints.scss
│   ├── _colors.scss
│   ├── _font-faces.scss
│   ├── _font-sizes.scss
│   ├── _font-stacks.scss
│   ├── _spacings.scss
│   ├── _trans-easing.scss
│   ├── _trans-speeds.scss
│   └── _z-indexes.scss
├── _utils/
│   ├── functions/
│   ├── mixins/
│   ├── _functions.scss
│   └── _mixins.scss
├── base/
│   ├── _elements.scss
│   ├── _formatting.scss
│   ├── _forms.scss
│   ├── _headings.scss
│   ├── _links.scss
│   ├── _lists.scss
│   ├── _media.scss
│   └── _tables.scss
├── comps/
│   ├── _tinymce.scss
│   └── _wp-classes.scss
├── layouts/
├── views/
└── main.scss
```

## Installation

Clone into your styles directory.

```shell
# @ example.com/site/web/app/themes/assets/
$ git clone https://github.com/darrenjacoby/itcss-starter styles
```

## Configuration & Usage

Declare a reusable style guide using Sass maps, located in `_config/`

### Breakpoints

Assign breakpoint values.

**Config:** [`_config/_breakpoints.scss`](_config/_breakpoints.scss)

```sass
$breakpoints: (
  xs: 20rem,
  sm: 36rem,
  md: 48rem,
  lg: 62rem,
  xl: 75rem,
  xx: 87.5rem,
);
```

**Usage:**
```sass
// For media queries, use mixins respond-up(breakpoint) or respond-down(breakpoint).
@include respond-up(sm) {

};
@include respond-down(lg) {

};

// For custom edge case breakpoint values, you can also pass a rem or px value to the mixin.
@include respond-up(20rem) {

};
```

### Colors

Assign color/branding values.

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

```sass
// Example: Declare two tier color/tone config
$colors: (
  primary: (
    base: hsl(157, 85%, 16%),
    tone1: hsl(144, 19%, 44%),
  ),
);
```

**Usage:**
```sass
// Use function get-color(color, tone). Omitting the tone param returns the base key.
color: get-color(primary);
color: get-color(primary, dark);
```

### Font sizes

Assign min and max font size values within a range, based on Mike Riethmuller's [precise control over responsive typography](https://madebymike.com.au/writing/precise-control-responsive-typography/)

**Config:** [`_config/_font-sizes.scss`](_config/_font-sizes.scss)

Each font-size key requires the following key/values;
* `min-size` and `max-size`
  * Sets the min and max font-size.
* `min-vw` and `max-vw`
  * Set the range for the type to fluidly respond within.
  * The required params for `min-vw` and `max-vw` are breakpoint keys found in [`_breakpoints.scss`](_config/_breakpoints.scss).

**For fluid type:**
```sass
$font-sizes: (
  deca: (
    min-size: 16px,
    max-size: 18px,
    min-vw: xs,
    max-vw: xl,
  ),
  // ...
)
```

**For fixed type:**
```sass
$font-sizes: (
  deca: (
    size: 16px,
  ),
  // ...
)
```

**Usage:**
```sass
@include font-size(deca);

// to get a value from the $font-sizes map;
font-size: get-font-size(deca) // returns the min-size value for key deca
font-size: get-font-size(deca, max) // returns the max-size value for key deca
```

### Font stacks

Assign font stack values.

**Config:** [`_config/_font-stacks.scss`](_config/_font-stacks.scss)

**Usage:**
```sass
// Use mixin font-stack(stack, weight). Omitting the weight param returns the base key.
@include font-stack(primary);
@include font-stack(primary, light);
```

### Spacing

[Mike Riethmuller's](https://madebymike.com.au/writing/precise-control-responsive-typography/) technique used for fluid type can also be used to create fluid spacing within a specific range.

**Config:** [`_config/_spacings.scss`](_config/_spacing.scss)

The config key/values are the same used for font sizes.

**For fluid spacing:**
```sass
$spacings: (
  deca: (
    min-size: 2rem,
    max-size: 4rem,
    min-vw: sm,
    max-vw: xl,
  ),
  // ...
)
```

**For fixed spacing:**
```sass
$spacings: (
  deca: (
    size: 2rem,
  ),
  // ...
)
```

**Usage:**
```sass
// default property is margin-bottom.
@include spacing(deca);

// to set which properties to use;
@include spacing(deca, padding-top);
@include spacing(deca, padding-top padding-bottom);

// to get a value from the $spacings map;
margin-bottom: get-spacing(deca); // returns the min-size value for key deca
margin-bottom: get-spacing(deca, max); // returns the max-size value for key deca
```

### Transition easings

Assign transition easing values.

**Config:** [`_config/_trans-easings.scss`](_config/_trans-easing.scss)

**Usage:**
```sass
// Use function get-trans-ease(param) with map key as param
transition: color get-trans-speed(slow) get-trans-ease(in);
```

### Transition speeds

Assign transition speed values.

**Config:** [`_config/_trans-speeds.scss`](_config/_trans-speeds.scss)

**Usage:**
```sass
// Use function get-trans-speed(param) with map key as param
transition: color get-trans-speed(slow) get-trans-ease(in);
```

### Z-indexes

Assign z-index values.

**Config:** [`_config/_z-indexes.scss`](_config/_z-indexes.scss)

**Usage:**
```sass
// Use function get-z-index(classname).
z-index: get-z-index(classname);
```

### Fluid

The fluid mixin can be used directly for better control (no config map required).

It sets fluid values based on a min and max value between two breakpoints. 

**Usage:**
```sass
@include fluid($props, $min-value, $max-value, $min-vw, $max-vw);
@include fluid(margin-bottom, 1rem, 2rem, get-break(xs), get-break(lg));
```

## Mixins

Some basic, common mixins have been included under [`_utils/_mixins/`](_utils/_mixins/) to help get you started.

## End

* Twitter [@withjacoby](https://twitter.com/withjacoby)
