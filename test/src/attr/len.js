import test from 'ava';
import * as compare from '../../../src';



import util from "util" ;

increasing = compare.len( compare.increasing ) ;
decreasing = compare.len( compare.decreasing ) ;


function t ( a, b, z ) {

	t.deepEqual(
		compare.sign( increasing( a, b ) ),
		z,
		util.format( "i %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	t.deepEqual(
		compare.sign( decreasing( a, b ) ),
		-z,
		util.format( "d %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

};


test( "attr" , t => {

	t( [], [], 0 );
	t( [], [0], -1 );
	t( [0], [], 1 );
	t( [0], [0], 0 );
	t( [0], [1], 0 );
	t( [1], [0], 0 );

	t( [1, 2], [1, 2, 3], -1 );
	t( [1, 3], [1, 2, 3], -1 );
	t( [1, 4], [1, 2, 3], -1 );

	t( [0, 6, 7, 8, 9], [1, 6, 7, 8, 9], 0 );
	t( [1, 6, 7, 8, 9], [0, 6, 7, 8, 9], 0 );

	t( [9, 8, 7, 6, 0], [9, 8, 7, 6, 1], 0 );
	t( [9, 8, 7, 6, 1], [9, 8, 7, 6, 0], 0 );

	t( [0, 6, 6, 6, 6], [1, 7, 7, 7, 7], 0 );
	t( [1, 6, 6, 6, 6], [0, 7, 7, 7, 7], 0 );

	t( [6, 6, 6, 6, 0], [7, 7, 7, 7, 1], 0 );
	t( [6, 6, 6, 6, 1], [7, 7, 7, 7, 0], 0 );

} ) ;

