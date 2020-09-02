import test from 'ava';
import * as compare from '../../src';


test( "decreasing", t => {


	t.true( compare.decreasing( Infinity,        0 )   < 0, "double <" );
	t.true( compare.decreasing( Infinity, Infinity ) === 0, "double =" );
	t.true( compare.decreasing(        0, Infinity )   > 0, "double >" );

	t.true( compare.decreasing( "abc",  "ab" )   < 0, "string <" );
	t.true( compare.decreasing( "abc", "abc" ) === 0, "string =" );
	t.true( compare.decreasing(  "ab", "abc" )   > 0, "string >" );

	t.true( compare.decreasing( NaN , NaN ) !== 0 , 'NaN != NaN');
	t.true( compare.decreasing( NaN , 0 ) !== 0 , 'NaN != 0');
	t.true( compare.decreasing( 0 , NaN ) !== 0 , '0 != NaN');
	t.true( compare.decreasing( NaN , Infinity ) !== 0 , 'NaN != Infinity');
	t.true( compare.decreasing( Infinity , NaN ) !== 0 , 'Infinity != NaN');
	t.true( compare.decreasing( NaN , -Infinity ) !== 0 , 'NaN != -Infinity');
	t.true( compare.decreasing( -Infinity , NaN ) !== 0 , '-Infinity != NaN');

	t.true( compare.decreasing( new Date(1), new Date(1) ) !== 0, "this library is not suitable for date value equality checking" );
	t.true( compare.decreasing( new Date(0), new Date(1) )   > 0, "date >" );
	t.true( compare.decreasing( new Date(1), new Date(0) )   < 0, "date <" );


});
