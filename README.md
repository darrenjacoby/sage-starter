# itcss-starter

Lightweight Sass starter for saner, longer lasting stylesheets.

The architecture is based on [ITCSS](http://itcss.io/), which recommends a **low specificity architecture that trends upwards.**

Place configuration at the top of the project with the use of Sass maps, and then use functions/mixins to retrieve those values in your components, layouts and views.

Run `npm run lint` to lint your files with [stylelint](http://stylelint.io/) using the [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) present, which can be managed under [package.json](package.json).  Update [.stylelintrc](.stylelintrc) to change rules.

## Structure

```shell
├── _config/
│   ├── _breaks.scss
│   ├── _colors.scss
│   ├── _font-sizes.scss
│   ├── _font-stacks.scss
│   ├── _layers.scss
│   ├── _spacings.scss
│   ├── _transitions.scss
│   └── _vendors.scss
├── _utils/
│   ├── functions/
│   ├── mixins/
│   ├── _functions.scss
│   └── _mixins.scss
├── base/
│   ├── _blocks.scss
│   ├── _formatting.scss
│   ├── _forms.scss
│   ├── _headings.scss
│   ├── _links.scss
│   ├── _lists.scss
│   ├── _media.scss
│   └── _tables.scss
├── comps/
│   ├── _buttons.scss
│   ├── _forms.scss
│   └── _wp-classes.scss
├── layouts/
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _singular.scss
│   └── _tinymce.scss
├── views/
│   └── _template.scss
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

### Breaks

Assign breakpoint values.

**Config:** [`_config/_breaks.scss`](_config/_breaks.scss)

```sass
// Example: Defaults are based on Bootstrap 4 breakpoints
$breaks: (
  xs: 20rem,
  sm: 36rem,
  md: 48rem,
  lg: 62rem,
  xl: 75rem,
  xx: 87.5rem,
) !default;
```

**Usage:**
```sass
// For media queries, use mixins respond-up(break) or respond-down(break).
@include respond-up(sm) {
  // declarations
};
@include respond-down(lg) {
  // declarations
};

// For custom edge case breakpoint values, you can also pass a rem or px value to the mixin.
@include respond-up(20rem) {
  // declarations
};
```

### Colors

Assign color/branding values.

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

```sass
// Example: Declare two tier color/tone config
$colors: (
  primary: (
    base: rgb(80, 0, 255),
    light: rgb(246, 242, 255),
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

### Layers

Assign layers/z-index values.

**Config:** [`_config/_layers.scss`](_config/_layers.scss)

**Usage:**
```sass
// Use function get-layer(layer).
z-index: get-layer(banner);
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

### Transitions

Assign transition easing and speed values.

**Config:** [`_config/_transitions.scss`](_config/_transitions.scss)

**Usage:**
```sass
// Use function get-ease(param) and get-speed(param) with map key as param
transition: color get-speed(slow) get-ease(in);
```

### Fluid

The fluid mixin can be used directly for better control (no config map required).

It sets fluid values based on a min and max value between two breakpoints. 

**Usage:**
```sass
@include fluid($props, $min-value, $max-value, $min-vw, $max-vw);
@include fluid(margin-bottom, 1rem, 2rem, get-break(xs), get-break(lg));
```

### Vendors

Assign vendor specific variables.

**Config:** [`_config/_vendors.scss`](_config/_vendors.scss)

## Mixins

Some basic, common mixins have been included under [`_utils/_mixins/`](_utils/_mixins/) to help get you started.

## Social

* Twitter [@withjacoby](https://twitter.com/withjacoby)
