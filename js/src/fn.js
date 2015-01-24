
var fn = function ( compare , callable ) {

	return function ( a , b ) {

		return compare( callable( a ) , callable( b ) ) ;

	} ;

} ;

exports.fn = fn ;
