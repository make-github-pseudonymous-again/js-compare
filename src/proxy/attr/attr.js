
const attr = ( compare , key ) => ( a , b ) => compare( a[key] , b[key] ) ;

exports.attr = attr ;

