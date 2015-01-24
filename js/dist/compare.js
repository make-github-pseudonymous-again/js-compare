(function(exports, undefined){

	'use strict';


/* js/src/attr */
/* js/src/attr/attr.js */

var attr = function ( compare , key ) {

	return function ( a , b ) {

		return compare( a[key] , b[key] ) ;

	} ;

} ;

exports.attr = attr ;


/* js/src/attr/len.js */

var len = function ( compare ) {

	return function ( a , b ) {

		return compare( a.length , b.length ) ;

	} ;

} ;

exports.len = len ;

/* js/src/decreasing.js */

var decreasing = function ( a , b ) {

	return ( a > b ) ? -1 : ( a === b ) ? 0 : 1 ;

} ;

exports.decreasing = decreasing ;

/* js/src/fn.js */

var fn = function ( compare , callable ) {

	return function ( a , b ) {

		return compare( callable( a ) , callable( b ) ) ;

	} ;

} ;

exports.fn = fn ;

/* js/src/increasing.js */

var increasing = function ( a , b ) {

	return ( a < b ) ? -1 : ( a === b ) ? 0 : 1 ;

} ;

exports.increasing = increasing ;

/* js/src/lexicographical */
/* js/src/lexicographical/colexicographical.js */

/**
 * Generates a binary colexicographical comparator
 * from a binary comparator.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
 *
 * compare( a, b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 * compare should express an increasing ordering
 */

var colexicographical = function ( compare ) {

	/**
	 * Compares 2 arrays a and b colexicographically.
	 */

	return function ( a, b ) {

		var i, m, n, len, d;

		m = a.length;
		n = b.length;

		len = Math.min( m, n );

		for ( i = 1 ; i <= len ; ++i ) {

			d = compare( a[m-i], b[n-i] );

			if ( d !== 0 ) {
				return d;
			}

		}

		return m - n;

	};

};

exports.colexicographical = colexicographical;

/* js/src/lexicographical/fixedcolexicographical.js */

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

/* js/src/lexicographical/fixedlexicographical.js */

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

/* js/src/lexicographical/lexicographical.js */

/**
 * Generates a binary lexicographical comparator
 * from a binary comparator.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order
 *
 * compare( a, b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 * compare should express an increasing ordering
 */

var lexicographical = function ( compare ) {

	/**
	 * Compares 2 arrays a and b lexicographically.
	 */

	return function ( a, b ) {

		var i, m, n, len, d;

		m = a.length;
		n = b.length;

		len = Math.min( m, n );

		for ( i = 0 ; i < len ; ++i ) {

			d = compare( a[i], b[i] );

			if ( d !== 0 ) {
				return d;
			}

		}

		return m - n;

	};

};

exports.lexicographical = lexicographical;

/* js/src/lexicographical/quasicolexicographical.js */

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

/* js/src/lexicographical/quasilexicographical.js */

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

/* js/src/reverse.js */

var reverse = function ( compare ) {

	return function ( a , b ) {

		return compare( b , a ) ;

	} ;

} ;

exports.reverse = reverse ;

/* js/src/sign.js */

var sign = function ( v ) {

	return v < 0 ? -1 : v > 0 ? 1 : 0 ;

} ;

exports.sign = sign ;

})(typeof exports === 'undefined' ? this['compare'] = {} : exports);
