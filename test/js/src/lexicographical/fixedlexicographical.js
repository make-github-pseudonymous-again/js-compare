

var util, increasing, decreasing, t;

util = require( "util" );

increasing = compare.fixedlexicographical( compare.increasing , 5 );
decreasing = compare.fixedlexicographical( compare.decreasing , 5 );


t = function ( a, b, z ) {

	deepEqual(
		compare.sign( increasing( a, b ) ),
		z,
		util.format( "i %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	deepEqual(
		compare.sign( decreasing( a, b ) ),
		-z,
		util.format( "d %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	a = a.concat( Math.random( ) ) ;
	b = b.concat( Math.random( ) ) ;

	deepEqual(
		compare.sign( increasing( a, b ) ),
		z,
		util.format( "i %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	deepEqual(
		compare.sign( decreasing( a, b ) ),
		-z,
		util.format( "d %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

};


test( "fixedlexicographical", function () {

	t( [1, 6, 7, 8, 9], [1, 6, 7, 8, 9], 0 );

	t( [0, 6, 7, 8, 9], [1, 6, 7, 8, 9], -1 );
	t( [1, 6, 7, 8, 9], [0, 6, 7, 8, 9], 1 );

	t( [9, 8, 7, 6, 0], [9, 8, 7, 6, 1], -1 );
	t( [9, 8, 7, 6, 1], [9, 8, 7, 6, 0], 1 );

	t( [0, 6, 6, 6, 6], [1, 7, 7, 7, 7], -1 );
	t( [1, 6, 6, 6, 6], [0, 7, 7, 7, 7], 1 );

	t( [6, 6, 6, 6, 0], [7, 7, 7, 7, 1], -1 );
	t( [6, 6, 6, 6, 1], [7, 7, 7, 7, 0], -1 );

});
