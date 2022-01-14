function checkNum100 ( x )
{
    return ( ( Math.abs( 100 - x ) <= 20 ) ||
        ( Math.abs(400 - x ) <= 20 ));
}

console.log( checkNum100( 10 ) );
console.log( checkNum100( 90 ) );
console.log( checkNum100( 99 ) );
console.log( checkNum100( 199 ) );
console.log( checkNum100( 200 ) );

