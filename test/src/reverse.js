import test from 'ava';
import * as compare from '../../src';



import util from "util" ;

const increasing = compare.increasing;
const decreasing = compare.decreasing;
const increasing2 = compare.reverse( decreasing );
const decreasing2 = compare.reverse( increasing );

function one( t , a, b ) {

	var i, d, i2, d2, ri, rd, ri2, rd2;

	i = increasing( a, b );
	d = decreasing( a, b );
	i2 = increasing2( a, b );
	d2 = decreasing2( a, b );
	ri = increasing( b, a );
	rd = decreasing( b, a );
	ri2 = increasing2( b, a );
	rd2 = decreasing2( b, a );

	t.deepEqual( i, i2, util.format( "i i2 ( %f, %f)", a, b ) );
	t.deepEqual( -i, ri, util.format( "-i ri ( %f, %f)", a, b ) );
	t.deepEqual( -i, ri2, util.format( "-i ri2 ( %f, %f)", a, b ) );
	t.deepEqual( -i, d, util.format( "-i d ( %f, %f)", a, b ) );
	t.deepEqual( -i, d2, util.format( "-i d2 ( %f, %f)", a, b ) );
	t.deepEqual( i, rd, util.format( "i rd ( %f, %f)", a, b ) );
	t.deepEqual( i, rd2, util.format( "i rd2 ( %f, %f)", a, b ) );

};


test( "reverse", t => {

	var n;

	n = 100;

	while ( n-- ) {
		one( t , Math.random(), Math.random() );
	}

});
