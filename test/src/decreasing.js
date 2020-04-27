import test from 'ava';
import * as compare from '../../src';


test( "decreasing", t => {


	t.truthy( compare.decreasing( Infinity,        0 )   < 0, "double <" );
	t.truthy( compare.decreasing( Infinity, Infinity ) === 0, "double =" );
	t.truthy( compare.decreasing(        0, Infinity )   > 0, "double >" );

	t.truthy( compare.decreasing( "abc",  "ab" )   < 0, "string <" );
	t.truthy( compare.decreasing( "abc", "abc" ) === 0, "string =" );
	t.truthy( compare.decreasing(  "ab", "abc" )   > 0, "string >" );


});
