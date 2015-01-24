
/**
 * Generates a binary quasicolexicographical comparator
 * from a binary comparator.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Quasi-lexicographic_order
 * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
 *
 * compare( a, b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 * compare should express an increasing ordering
 */

var quasicolexicographical = function ( compare ) {

	/**
	 * Compares 2 arrays a and b quasicolexicographically.
	 */

	return function ( a, b ) {

		var i, m, n, len, d;

		m = a.length;
		n = b.length;

		if ( m !== n ) {
			return m - n;
		}

		len = Math.min( m, n );

		for ( i = 1 ; i <= len ; ++i ) {

			d = compare( a[m-i], b[n-i] );

			if ( d !== 0 ) {
				return d;
			}

		}

		return 0;

	};

};

exports.quasicolexicographical = quasicolexicographical;
