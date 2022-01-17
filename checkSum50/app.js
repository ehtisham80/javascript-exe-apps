function checkNum50 ( x, y )
{
    return ( ( x == 50 || y == 50 ) || ( x + y == 50 ) );
}

console.log( checkNum50( 50, 50 ) )
console.log( checkNum50( 20, 50 ) )
console.log( checkNum50( 20, 20 ) );
console.log( checkNum50( 20, 30 ) );

