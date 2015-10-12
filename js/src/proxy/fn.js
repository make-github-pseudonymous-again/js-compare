
const fn = ( compare , callable ) => ( a , b ) => compare( callable( a ) , callable( b ) ) ;

exports.fn = fn ;
