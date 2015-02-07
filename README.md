[js-compare](http://aureooms.github.io/js-compare)
==

comparison code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-compare.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-compare/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-compare.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-compare)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-compare.svg?style=flat)](http://bower.io/search/?q=aureooms-js-compare)
[![Build Status](http://img.shields.io/travis/aureooms/js-compare.svg?style=flat)](https://travis-ci.org/aureooms/js-compare)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-compare.svg?style=flat)](https://coveralls.io/r/aureooms/js-compare)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-compare.svg?style=flat)](https://david-dm.org/aureooms/js-compare#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-compare.svg?style=flat)](https://david-dm.org/aureooms/js-compare#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-compare.svg?style=flat)](https://codeclimate.com/github/aureooms/js-compare)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-compare.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-compare)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-compare.svg?style=flat)](https://github.com/aureooms/js-compare/issues)

Example usage:

```javascript
var compare , increasing , decreasing , lexicographical , reverselexicographical ;

compare = require( "aureooms-js-compare" ) ;

increasing = compare.increasing ;
decreasing = compare.decreasing ;

increasing( 1 , 1 ) === 0 ; // true
increasing( 1 , 2 )  <  0 ; // true
increasing( 2 , 1 )  >  0 ; // true
decreasing( 1 , 1 ) === 0 ; // true
decreasing( 1 , 2 )  >  0 ; // true
decreasing( 2 , 1 )  <  0 ; // true

lexicographical = compare.lexicographical( increasing ) ;

lexicographical( [ 1 , 1 ] , [ 1 , 1 ] ) === 0 ; // true
lexicographical( [ 1 , 1 ] , [ 1 , 2 ] )  <  0 ; // true
lexicographical( [ 1 , 2 ] , [ 1 , 1 ] )  >  0 ; // true

lexicographical( [ 1 , 1 ] , [ 1 , 1 , 1 ] ) < 0 ; // true
lexicographical( [ 1 , 1 , 1 ] , [ 1 , 1 ] ) > 0 ; // true
lexicographical( [ 2 , 1 ] , [ 1 , 1 , 1 ] ) > 0 ; // true
lexicographical( [ 1 , 1 , 1 ] , [ 2 , 1 ] ) < 0 ; // true

reverselexicographical = compare.reverse( lexicographical ) ;

reverselexicographical( [ 1 , 1 ] , [ 1 , 1 ] ) === 0 ; // true
reverselexicographical( [ 1 , 1 ] , [ 1 , 2 ] )  >  0 ; // true
reverselexicographical( [ 1 , 2 ] , [ 1 , 1 ] )  <  0 ; // true

reverselexicographical( [ 1 , 1 ] , [ 1 , 1 , 1 ] ) > 0 ; // true
reverselexicographical( [ 1 , 1 , 1 ] , [ 1 , 1 ] ) < 0 ; // true
reverselexicographical( [ 2 , 1 ] , [ 1 , 1 , 1 ] ) < 0 ; // true
reverselexicographical( [ 1 , 1 , 1 ] , [ 2 , 1 ] ) > 0 ; // true

// ... and many more variants.

/** compare backwards, if identical compare length */
increasing = compare.colexicographical( compare.increasing ) ;
/** compare length first, if identical compare forwards */
increasing = compare.quasilexicographical( compare.increasing ) ; 
/** compare length first, if identical compare backwards */
increasing = compare.quasicolexicographical( compare.increasing ) ; 
/** compare components in range [0, 3[, forwards */
increasing = compare.fixedlexicographical( compare.increasing , 3 ) ; 
/** compare components in range [0, 3[, backwards */
increasing = compare.fixedcolexicographical( compare.increasing , 3 ) ; 

// Also includes comparison function creation tools, Hereunder, all versions are equivalent.
increasing = compare.fn( compare.increasing , function ( item ) { return item.length ; } )
increasing = compare.attr( compare.increasing , "length" )
increasing = compare.len( compare.increasing )

// Plus an additional useful tool.
compare.sign( -2378 ) === -1 ; // true
compare.sign(     0 ) ===  0 ; // true
compare.sign(  2378 ) ===  1 ; // true


```

References:

  - https://en.wikipedia.org/wiki/Lexicographical_order
