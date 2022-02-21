function maxThree ( x, y, z )
{
    maxValue = 0;
    if ( x > y )
    {
        maxValue = x;
    }
    else
    {
        maxValue = y;
    }
    if ( z > maxValue )
    {
        maxValue = z;
    }
    else
    {
        return maxValue;
    }
}

console.log( maxThree( 1, 0, 1 ) );
console.log( maxThree( 0, -10, -20 ) );
console.log( maxThree( 1000, 510, 440 ) );