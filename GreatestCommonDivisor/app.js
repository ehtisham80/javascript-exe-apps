var GreatestCommonDivisor = function( a, b ) {
    if ( !b )
    {
        return a;
    }
    return GreatestCommonDivisor( b, a % b );
};

console.log( GreatestCommonDivisor( 2154, 458 ) );
