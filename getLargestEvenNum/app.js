function getLargestNum (arr)
{
    arr.sort( ( x, y ) => y - x );
    
    for ( let i = 0; i < arr.length; i++ )
    {
        if ( arr[ i ] % 2 == 0 )
            return arr[ i ];
    }
}

console.log( getLargestNum( [20, 40, 200 ]) );
console.log( getLargestNum( [20, 40, 200, 301] ) );
