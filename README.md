[js-compare](http://aureooms.github.io/js-compare)
==

Comparison code bricks for JavaScript.

```js
let compare = reverse( lexicographical( increasing ) ) ;
compare( [ 1 , 1 ] , [ 1 , 2 ] )  >  0 ; // true
```

[![License](https://img.shields.io/github/license/aureooms/js-compare.svg)](https://raw.githubusercontent.com/aureooms/js-compare/master/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-compare.svg)](https://www.npmjs.org/package/@aureooms/js-compare)
[![Build](https://img.shields.io/travis/aureooms/js-compare/master.svg)](https://travis-ci.org/aureooms/js-compare/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-compare.svg)](https://david-dm.org/aureooms/js-compare)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-compare.svg)](https://david-dm.org/aureooms/js-compare?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-compare.svg)](https://github.com/aureooms/js-compare/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-compare.svg)](https://www.npmjs.org/package/@aureooms/js-compare)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-compare.svg)](https://codeclimate.com/github/aureooms/js-compare/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-compare.svg)](https://codeclimate.com/github/aureooms/js-compare/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-compare/master.svg)](https://codecov.io/gh/aureooms/js-compare)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-compare.svg)](https://codeclimate.com/github/aureooms/js-compare/trends/technical_debt)
[![Documentation](http://aureooms.github.io/js-compare//badge.svg)](http://aureooms.github.io/js-compare//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-compare)](https://bundlephobia.com/result?p=@aureooms/js-compare)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-compare
# or
jspm install npm:@aureooms/js-compare
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-compare
```

### bower
```terminal
bower install @aureooms/js-compare
```

### ender
```terminal
ender add @aureooms/js-compare
```

### jam
```terminal
jam install @aureooms/js-compare
```

### spm
```terminal
spm install @aureooms/js-compare --save
```

### npm
```terminal
npm install @aureooms/js-compare --save
```

## Require
### jspm
```js
let compare = require( "github:aureooms/js-compare" ) ;
// or
import compare from '@aureooms/js-compare' ;
```
### duo
```js
let compare = require( "aureooms/js-compare" ) ;
```

### component, ender, spm, npm
```js
let compare = require( "@aureooms/js-compare" ) ;
```

### bower
The script tag exposes the global variable `compare`.
```html
<script src="bower_components/@aureooms/js-compare/js/dist/compare.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-compare" ] , function ( compare ) { ... } ) ;
```

## Use

```js
let increasing = compare.increasing ;
let decreasing = compare.decreasing ;

increasing( 1 , 1 ) === 0 ; // true
increasing( 1 , 2 )  <  0 ; // true
increasing( 2 , 1 )  >  0 ; // true
decreasing( 1 , 1 ) === 0 ; // true
decreasing( 1 , 2 )  >  0 ; // true
decreasing( 2 , 1 )  <  0 ; // true

let lexicographical = compare.lexicographical( increasing ) ;

lexicographical( [ 1 , 1 ] , [ 1 , 1 ] ) === 0 ; // true
lexicographical( [ 1 , 1 ] , [ 1 , 2 ] )  <  0 ; // true
lexicographical( [ 1 , 2 ] , [ 1 , 1 ] )  >  0 ; // true

lexicographical( [ 1 , 1 ] , [ 1 , 1 , 1 ] ) < 0 ; // true
lexicographical( [ 1 , 1 , 1 ] , [ 1 , 1 ] ) > 0 ; // true
lexicographical( [ 2 , 1 ] , [ 1 , 1 , 1 ] ) > 0 ; // true
lexicographical( [ 1 , 1 , 1 ] , [ 2 , 1 ] ) < 0 ; // true

let reverselexicographical = compare.reverse( lexicographical ) ;

reverselexicographical( [ 1 , 1 ] , [ 1 , 1 ] ) === 0 ; // true
reverselexicographical( [ 1 , 1 ] , [ 1 , 2 ] )  >  0 ; // true
reverselexicographical( [ 1 , 2 ] , [ 1 , 1 ] )  <  0 ; // true

reverselexicographical( [ 1 , 1 ] , [ 1 , 1 , 1 ] ) > 0 ; // true
reverselexicographical( [ 1 , 1 , 1 ] , [ 1 , 1 ] ) < 0 ; // true
reverselexicographical( [ 2 , 1 ] , [ 1 , 1 , 1 ] ) < 0 ; // true
reverselexicographical( [ 1 , 1 , 1 ] , [ 2 , 1 ] ) > 0 ; // true

// ... and many more variants.

/** compare backwards, if identical compare length */
let increasing = compare.colexicographical( compare.increasing ) ;
/** compare length first, if identical compare forwards */
let increasing = compare.quasilexicographical( compare.increasing ) ;
/** compare length first, if identical compare backwards */
let increasing = compare.quasicolexicographical( compare.increasing ) ;
/** compare components in range [0, 3[, forwards */
let increasing = compare.fixedlexicographical( compare.increasing , 3 ) ;
/** compare components in range [0, 3[, backwards */
let increasing = compare.fixedcolexicographical( compare.increasing , 3 ) ;
/** compare components in range [1, 4[, forwards */
let increasing = compare.rangedlexicographical( compare.increasing , 1 , 4 ) ;
/** compare components in range [1, 4[, backwards */
let increasing = compare.rangedcolexicographical( compare.increasing , 1 , 4 ) ;

// Also includes comparison function creation tools. Hereunder, all versions are equivalent.
let operator = require( "@aureooms/js-operator" ) ;
let increasing = compare.fn( compare.increasing , operator.len ) ;
let increasing = compare.attr( compare.increasing , "length" ) ;
let increasing = compare.len( compare.increasing ) ;

// Plus an additional useful tool.
compare.sign( -2378 ) === -1 ; // true
compare.sign(     0 ) ===  0 ; // true
compare.sign(  2378 ) ===  1 ; // true
```

## References

  - https://en.wikipedia.org/wiki/Lexicographical_order
