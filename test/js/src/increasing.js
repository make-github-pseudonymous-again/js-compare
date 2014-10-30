

test( "increasing", function () {


	ok( compare.increasing(        0, Infinity )   < 0, "double <" );
	ok( compare.increasing( Infinity, Infinity ) === 0, "double =" );
	ok( compare.increasing( Infinity,        0 )   > 0, "double >" );

	ok( compare.increasing(  "ab", "abc" )   < 0, "string <" );
	ok( compare.increasing( "abc", "abc" ) === 0, "string =" );
	ok( compare.increasing( "abc",  "ab" )   > 0, "string >" );


});
