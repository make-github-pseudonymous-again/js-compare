

test( "decreasing", function () {


	ok( compare.decreasing( Infinity,        0 )   < 0, "double <" );
	ok( compare.decreasing( Infinity, Infinity ) === 0, "double =" );
	ok( compare.decreasing(        0, Infinity )   > 0, "double >" );

	ok( compare.decreasing( "abc",  "ab" )   < 0, "string <" );
	ok( compare.decreasing( "abc", "abc" ) === 0, "string =" );
	ok( compare.decreasing(  "ab", "abc" )   > 0, "string >" );


});
