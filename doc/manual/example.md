# Examples

> More examples in [the test files](https://github.com/aureooms/js-compare/tree/master/test/src).

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
