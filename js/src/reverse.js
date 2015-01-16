

var reverse = function ( compare ) {

	return function ( a , b ) {

		return compare( b , a ) ;

	} ;

} ;

exports.reverse = reverse ;
