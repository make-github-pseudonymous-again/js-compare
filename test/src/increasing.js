import test from 'ava';
import * as compare from '../../src';


test( "increasing", t => {


	t.truthy( compare.increasing(        0, Infinity )   < 0, "double <" );
	t.truthy( compare.increasing( Infinity, Infinity ) === 0, "double =" );
	t.truthy( compare.increasing( Infinity,        0 )   > 0, "double >" );

	t.truthy( compare.increasing(  "ab", "abc" )   < 0, "string <" );
	t.truthy( compare.increasing( "abc", "abc" ) === 0, "string =" );
	t.truthy( compare.increasing( "abc",  "ab" )   > 0, "string >" );


});
