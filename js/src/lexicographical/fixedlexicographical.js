
/**
 * Generates a binary lexicographical comparator for fixed size arrays.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order
 *
 * compare( a , b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 */

var fixedlexicographical = function ( compare , len ) {

	/**
	 * Compares 2 fixed size arrays a and b of size len lexicographically.
	 */

	return function ( a , b ) {

		var i , d ;

		for ( i = 0 ; i < len ; ++i ) {

			d = compare( a[i] , b[i] ) ;

			if ( d !== 0 ) {
				return d ;
			}

		}

		return 0 ;

	} ;

} ;

exports.fixedlexicographical = fixedlexicographical ;
