
var attr = function ( compare , key ) {

	return function ( a , b ) {

		return compare( a[key] , b[key] ) ;

	} ;

} ;

exports.attr = attr ;

