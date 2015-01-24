
var len = function ( compare ) {

	return function ( a , b ) {

		return compare( a.length , b.length ) ;

	} ;

} ;

exports.len = len ;
