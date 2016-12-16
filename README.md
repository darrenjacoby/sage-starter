# Sass

Sass structure and tooling for faster frontend development.

Bootstrap 4 **not required**, just remove `wp-classes.scss` or replace the media queries and `$spacer` to avoid build errors.

## Structure

```shell
├── _config/
│   ├── _config.scss
│   ├── _colors.scss
│   ├── _font-icons.scss
│   ├── _font-sizes.scss
│   ├── _font-stacks.scss
│   ├── _grid.scss
│   ├── _layers.scss
│   ├── _transitions.scss
│   └── _vendors.scss
├── _utils/
│   ├── functions/
│   ├── mixins/
│   ├── reboot/
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _reboot.scss
├── components/
│   ├── _buttons.scss
│   ├── _forms.scss
│   └── _wp-classes.scss
├── layouts/
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _sidebar.scss
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
$ git clone https://github.com/darrenjacoby/sass-starter styles
```

## Usage

Sass maps allow you to declare a reusable style guide for your theme in one location.<br>
Sass maps are located under `_config/`

### Colors

Assign color/branding values.

**Config:** [`_config/_colors.scss`](_config/_colors.scss)

```sass
// Example: adding two tier color/shade
$colors: (
  primary: (
    base: #5000ff,
    dark: #4600E7,
  ),
);
```

**Usage:**
```sass
// Use function get-color() with map key as param. Omit shade param to return base.
color: get-color(primary);
color: get-color(primary, dark);
```

### Font sizes

Assign font size values.
* Includes support for breakpoints declared in [`_grid.scss`](_config/_grid.scss).
* Outputs both rem and px values.

**Config:** [`_config/_font-sizes.scss`](_config/_font-sizes.scss)
```sass
// Example: adding breakpoint support in the config
$font-sizes: (
  deca: (
    base: (
      'font-size': 21px
    ),
    lg: (
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

Assign font stack values.

**Config:** [`_config/_font-stacks.scss`](_config/_font-stacks.scss)

**Usage:**
```sass
// Use mixin font-stack() with map key as param
@include font-stack(primary);
```

### Font icons

Assign font icon values.

**Config:** [`_config/_font-icons.scss`](_config/_font-icons.scss)

**Usage:**
```sass
// Use mixin font-icon() with map key as param
@include font-icon-ready;
@include font-icon(right);
```

### Layers

Assign layers/z-index values.

**Config:** [`_config/_layers.scss`](_config/_layers.scss)

**Usage:**
```sass
// Use function get-layer() with map key as param
z-index: get-layer(banner);
```

### Transitions

Assign transition easing and speed values.

**Config:** [`_config/_transitions.scss`](_config/_transitions.scss)

**Usage:**
```sass
// Use function get-ease() with map key as param
transition: color get-speed(slow) get-ease(in);
```

### Vendors

Assign vendor specific variables.

**Config:** [`_config/_vendors.scss`](_config/_vendors.scss)
