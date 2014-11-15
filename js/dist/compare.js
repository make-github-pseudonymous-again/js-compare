(function(exports, undefined){

	'use strict';


/* js/src/decreasing.js */


var decreasing = function ( a, b ) {

	return ( a > b ) ? -1 : ( ( a === b ) ? 0 : 1 );

};

exports.decreasing = decreasing;

/* js/src/increasing.js */


var increasing = function ( a, b ) {

	return ( a < b ) ? -1 : ( ( a === b ) ? 0 : 1 );

};

exports.increasing = increasing;

/* js/src/lexicographical.js */

/**
 * Generates a binary lexicographical comparator
 * from a binary comparator.
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

			if ( d < 0 || d > 0 ) {
				return d;
			}

		}

		return m - n;

	};

};

exports.lexicographical = lexicographical;

/* js/src/negate.js */


var negate = function ( compare ) {

	return function ( a, b ) {
		return compare ( b, a );
	};

};

exports.negate = negate;

/* js/src/sign.js */

var sign = function ( v ) {

	return v < 0 ? -1 : v > 0 ? 1 : 0;

};

exports.sign = sign;

})(typeof exports === 'undefined' ? this['compare'] = {} : exports);
