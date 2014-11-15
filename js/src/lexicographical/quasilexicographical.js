
/**
* Generates a binary quasilexicographical comparator
* from a binary comparator.
*
* https://en.wikipedia.org/wiki/Lexicographical_order#Quasi-lexicographic_order
*
* compare( a, b ) should always return
*   - a negative value if a < b
*   - a positive value if a > b
*   - zero if a === b
*
* compare should express an increasing ordering
*/

var quasilexicographical = function ( compare ) {

	/**
	* Compares 2 arrays a and b quasilexicographically.
	*/

	return function ( a, b ) {

		var i, m, n, len, d;

		m = a.length;
		n = b.length;

		if ( m !== n ) {
			return m - n;
		}

		len = Math.min( m, n );

		for ( i = 0 ; i < len ; ++i ) {

			d = compare( a[i], b[i] );

			if ( d !== 0 ) {
				return d;
			}

		}

		return 0;

	};

};

exports.quasilexicographical = quasilexicographical;
