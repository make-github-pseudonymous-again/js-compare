
/**
 * Generates a binary colexicographical comparator for fixed size arrays.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
 *
 * compare( a , b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 */

var fixedcolexicographical = function ( compare , len ) {

	/**
	 * Compares 2 fixed size arrays a and b of size len colexicographically.
	 */

	return function ( a , b ) {

		var i , d ;

		for ( i = len ; i-- ; ) {

			d = compare( a[i] , b[i] );

			if ( d !== 0 ) {
				return d ;
			}

		}

		return 0 ;

	} ;

} ;

exports.fixedcolexicographical = fixedcolexicographical ;
