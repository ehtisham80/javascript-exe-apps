function findRoundNum ( num )
{
    while ( num % 10 )
    {
        num++;
    }
    return num;
}

console.log( findRoundNum( 56 ) );
console.log( findRoundNum( 494 ) );