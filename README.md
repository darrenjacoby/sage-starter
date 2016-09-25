# Sass

Sass structure and tooling for faster, cleaner frontend development. Based on [Sage 9](https://github.com/roots/sage) and [Bootstrap 4](https://github.com/twbs/bootstrap).

## Structure

```shell
├── main.scss
├── _config/
│   ├── _all.scss
│   ├── _breakpoints.scss
│   ├── _colors.scss
│   ├── _easing.scss
│   ├── _font-sizes.scss
│   ├── _font-stacks.scss
│   ├── _layers.scss
│   ├── _speeds.scss
│   └── _vendors.scss
├── _utils/
│   ├── functions/
│   ├── mixins/
│   ├── _all.scss
│   ├── _functions.scss
│   └── _mixins.scss
├── base/
│   ├── _all.scss
│   ├── _body.scss
│   ├── _forms.scss
│   ├── _headings.scss
│   ├── _links.scss
│   ├── _lists.scss
│   ├── _media.scss
│   ├── _paragraphs.scss
│   ├── _quotes.scss
│   ├── _reset.scss
│   ├── _structures.scss
│   ├── _tables.scss
│   └── _text-formatting.scss
├── components/
│   ├── _buttons.scss
│   ├── _comments.scss
│   ├── _forms.scss
│   ├── _grid.scss
│   └── _wp-classes.scss
├── layouts/
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _pages.scss
│   ├── _posts.scss
│   └── _tinymce.scss
└── views/
```

## Usage

Sass maps allow you to declare a reusable style guide.<br>
Sass maps are located under `_config/`

### Breakpoints

Assign breakpoints and max container width values for the Bootstrap grid.

**Config:** [`_config/_breakpoints.scss`](_config/_breakpoints.scss)

**Usage:**
```sass
@include media-breakpoint-up(md) {}
```

### Colors

Assign colors/branding values.

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

**Usage:**
```sass
// Use function get-color() with map key as param
color: get-color(primary);
```

### Easing

Assign transition easing values.

**Config:** [`_config/_easing.scss`](_config/_easing.scss)

**Usage:**
```sass
// Use function get-ease() with map key as param
transition: color get-speed(slow) get-ease(in);
```

### Font sizes

Assign font size values.
* Includes support for breakpoints declared in [`_breakpoints.scss`](_config/_breakpoints.scss).
* Outputs both rem and px values.

**Config:** [`_config/_font-sizes.scss`](_config/_font-sizes.scss)
```sass
// Example: adding breakpoint support in the config
$font-sizes: (
  'deca': (
    'base': (
      'font-size': 21px
    ),
    'lg': (
      'font-size': 27px
    )
  ),
  // ...
)
```

**Usage:**
```sass
// Use Sass mixin font-size with map value as param
@include font-size(deca);
```

### Font stacks

Assign font stack values and include @import/@font-face.

**Config:** [`_config/_font-stacks.scss`](_config/_font-stacks.scss)

**Usage:**
```sass
// Use mixin font-stack() with map key as param
@import font-stack(primary);
```

### Layers

Assign layers/z-index values.

**Config:** [`_config/_layers.scss`](_config/_layers.scss)

**Usage:**
```sass
// Use function get-layer() with map key as param
z-index: get-layer(banner);
```

### Speeds

Assign transition speed values.

**Config:** [`_config/_speeds.scss`](_config/_speeds.scss)

**Usage:**
```sass
// Use function get-speed() with map key as param
transition: color get-speed(slow) get-ease(in);
```

### Vendors

Assign vendor specific variables.

**Config:** [`_config/_vendors.scss`](_config/_vendors.scss)

## Installation

Clone into your themes styles directory.

```shell
# @ example.com/site/web/app/themes/assets/styles/
$ git clone https://github.com/darrenjacoby/sass-starter
```

## Todo

* Margin bottom (vertical rhythm)
