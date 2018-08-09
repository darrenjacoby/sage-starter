# sage/styles

Sass starter for longer lasting stylesheets with a single source of truth.

Configuration is placed in Sass maps at the top of the project, functions/mixins are then used to retrieve those values in your comps, layouts and views. 

This starter makes no assumptions on frontend frameworks, and only provides the config, utils and folder structure.

## Structure

```shell
├── _config/
│   ├── _breakpoints.scss
│   ├── _colors.scss
│   ├── _durations.scss
│   ├── _font-faces.scss
│   ├── _font-families.scss
│   ├── _font-sizes.scss
│   ├── _sizes.scss
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
├── blocks/
│   ├── _clear.scss
│   ├── _container.scss
│   └── _flex.scss
├── comps/
│   ├── _tinymce.scss
│   └── _wp-classes.scss
├── layouts/
│   ├── _banner.scss
│   └── _footer.scss
├── views/
└── main.scss
```

## Installation

Clone into your styles directory.

```shell
# @ example.com/site/web/app/themes/assets/
$ git clone https://github.com/darrenjacoby/sage-styles styles
```

## Configuration & Usage

Declare a reusable style guide using Sass maps, located in `_config/`

### Breakpoints

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
// media queries based on $breakpoints
@include respond-up(sm) {}
@include respond-down(lg) {}

// custom media query
@include respond-up(20rem) {]
```

### Colors

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

```sass
$colors: (
  primary: (
    base: hsl(157, 85%, 16%),
    tone1: hsl(144, 19%, 44%),
  ),
);
```

**Usage:**
```sass
// function get-color(color, tone). 
// excluding the tone param returns the base key
color: get-color(primary);
color: get-color(primary, dark);
```

### Font sizes

Fluid min and max font size values within a range, based on Mike Riethmuller's [precise control over responsive typography](https://madebymike.com.au/writing/precise-control-responsive-typography/)

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
// get fluid font sizes from $font-sizes
@include font-size(deca);

// get a single value from the $font-sizes
font-size: get-font-size(deca) // returns the min-size value for key deca
font-size: get-font-size(deca, max) // returns the max-size value for key deca
```

### Font families

**Config:** [`_config/_font-families.scss`](_config/_font-families.scss)

**Usage:**
```sass
// get a value from the $font-families map
font-family: get-font-family(primary);
font-family: get-font-family(primary, tone1);
```

### Sizes

[Mike Riethmuller's](https://madebymike.com.au/writing/precise-control-responsive-typography/) technique used for fluid type can also be used to create fluid size within a specific range.

**Config:** [`_config/_sizes.scss`](_config/_size.scss)

The config key/values are the same used for font sizes.

**For fluid size:**
```sass
$sizes: (
  deca: (
    min-size: 2rem,
    max-size: 4rem,
    min-vw: sm,
    max-vw: xl,
  ),
  // ...
)
```

**For fixed size:**
```sass
$sizes: (
  deca: (
    size: 2rem,
  ),
  // ...
)
```

**Usage:**
```sass
// default prop is margin-bottom
@include size(deca);

// use a custom prop or props
@include size(deca, padding-top padding-bottom);

// get a single value from the $sizes map;
margin-bottom: get-size(deca); // returns the min-size value for key deca
margin-bottom: get-size(deca, max); // returns the max-size value for key deca
```

### Durations

**Config:** [`_config/_durations.scss`](_config/_durations.scss)

**Usage:**
```sass
// get a value from the $durations map
transition: color get-duration(slow) ease-in;
```

### Z-indexes

**Config:** [`_config/_z-indexes.scss`](_config/_z-indexes.scss)

**Usage:**
```sass
// get a value from the $z-indexes map
z-index: get-z-index(classname);
```

### Fluid

The fluid mixin can be used directly for better control (no config map required).

It sets fluid values based on a min and max value between two breakpoints. 

**Usage:**
```sass
@include fluid($props, $min-value, $max-value, $min-vw, $max-vw);

// excluding $min-vw, $max-vw gets the default sm/xl values from $breakpoints
@include fluid($props, $min-value, $max-value);

// for more control you can pass the values
@include fluid(margin-bottom, 1rem, 2rem, get-break(sm), get-break(xl));
```

#### Mixins

**Usage:**
```sass
// Append map keys and values to class
.font {
  @include map($font-families, 'font-family');
  // .font-primary

  @include map-respond-classes($font-sizes, 'font-size');
  // .font-deca, font-deca:md, font-deca:lg, etc
}


// Append classes with screen sizes from $breakpoints
.class-name {
  @mixin respond-classes {
    // .class-name, .class-name:md, .class-name:lg, etc
  }
}
```
