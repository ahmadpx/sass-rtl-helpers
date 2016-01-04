# Sass rtl helpers

Sass rtl helpers are **Functions** and **Mixins** helps you to support `rtl` direction in your project. The main idea here is coding for one direction with `mixins` instead of `properties` which have any direction values such as `float`, `text-align`, `margin-*`, `padding-*` ... etc and these `mixins` will be compiled with the right values according to direction of the page.

## Features

* 20 Mixins and 5 Functions.
* Adding styles in just one direction.
* Assign different values according to the direction of the page.
* `!important` is supported in all mixins.
* `short-hand` values are supported such as `margin`, `padding`, `border-radius`, ... etc.
* Functions to swap values according to the direction of the page.

## Structure
```
sass/
|
|- helpers/     
|   |
|   |- _functions.helpers.scss
|   |- _functions.localization.scss
|   |- _mixins.localization.scss
|   ... your other mixins, functions, and any other nongenerated files
|
|- your own sass structure folders/
|   |
|   |- _base.typography.scss
|   ...
|
|- _partials.scss // contain all @imported files in both app.scss and app.rtl.scss
|- app.scss // contain _partials.css and any specific scss files for just ltr
|- app.rtl.scss // // contain _partials.css and any specific scss files for just rtl
```


## Functions
#### ltr-rtl-values($default-value, $opposite-value)

Used with or without localization mixins in `_mixins.localization.scss`
```
font-size: ltr-rtl-values(12px, 14px);
```
Output
```
ltr > font-size: 12px;
rtl > font-size: 14px;
```

#### swap-side-values($value)

Used to Reorder values according to direction such as margin and padding
```
padding: swap-side-values(2px 4px 3px 5px);
```
Output
```
padding: 2px 5px 3px 4px;
```

#### swap-corner-values($value)

Used to Reorder values according to direction such as border-radius
```
border-radius: swap-corner-values(5px 8px 3px 4px);
```
Output
```
border-radius: 8px 5px 4px 3px;
```

#### swap-direction($value)

Used to swap direction from left to right and vice versa
```
float: swap-direction(right);
```
Output
```
float: left;
```

#### swap-box-shadow($value)

This function is valid for one value for box-shadow if you want to use multible values for box-shadow
use the mixin of box-shadow() in `_mixins.localization.scss`
```
box-shadow: swap-box-shadow(2px 5px 0 #000 !important);
```
Output
```
box-shadow: -2px 5px 0 #000 !important;
```

## Mixins
#### only-in($dir)

This mixin used to implement property or rule in just one direction `ltr` or `rtl`
```
@include only-in(rtl) {
    body{
        background: red;
    }
}
```
Output
```
ltr > nothing
rtl >
body {
    background: red;
}
```

#### left($value), right($value)

Used to generate [left, right] properties according to page direction `ltr` or `rtl`
```
@include left(15px);
```
Output
```
ltr > left: 15px;
rtl > right: 15px;
```

#### float($dir)

Used to generate [float] property according to page direction `ltr` or `rtl`
```
@include float(left);
```
Output
```
ltr > float: left;
rtl > float: right;
```

#### text-align($dir)

Used to generate [text-align] property according to page direction `ltr` or `rtl`
```
@include text-align(left);
```
Output
```
ltr > text-align: left;
rtl > text-align: right;
```

#### clear($dir)

Used to generate [clear] property according to page direction `ltr` or `rtl`
```
@include clear(left);
```
Output
```
ltr > clear: left;
rtl > clear: right;
```

#### padding($value), padding-left($value), padding-right($value)

Used to generate [padding, padding-left, padding-right] properties according to page direction `ltr` or `rtl`
```
@include padding(5px 8px 3px 4px);
```
Output
```
ltr > padding: 5px 8px 3px 4px;
rtl > padding: 5px 4px 3px 8px;
```


#### margin($value), margin-left($value), margin-right($value)

Used to generate [margin, margin-left, margin-right] properties according to page direction `ltr` or `rtl`
```
@include margin(5px 8px 3px 4px);
```
Output
```
ltr > margin: 5px 8px 3px 4px;
rtl > margin: 5px 4px 3px 8px;
```

#### border($value), border-left($value), border-right($value), border-left-color($value), border-left-width($value), 
border-right-color($value), border-right-width($value)

Used to generate border properties according to page direction `ltr` or `rtl`
```
@include border-left(1px solid green);
```
Output
```
ltr > border-left: 1px solid green;
rtl > border-right: 1px solid green;
```

#### border-radius($value)

Used to generate border-radius according to page direction `ltr` or `rtl`
```
@include @include border-radius(5px 8px 3px 4px);
```
Output
```
ltr > border-radius: 5px 8px 3px 4px;
rtl > border-radius: 8px 5px 4px 3px;
```

#### border-shadow($values...)

Used to generate border-shadow according to page direction `ltr` or `rtl`. This mixin supports multiple values.
```
@include @include border-shadow(2px 5px 0 #000,1px 3px 0 #000,4px 2px 0 #000 !important);
```
Output
```
ltr > border-shadow: 2px 5px 0 #000,1px 3px 0 #000,4px 2px 0 #000 !important;
rtl > border-shadow: -2px 5px 0 #000,-1px 3px 0 #000,-4px 2px 0 #000 !important;
```

## License

**MIT**

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request