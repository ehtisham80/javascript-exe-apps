function checkNums (x, y)
{
    if ( ( x >= 50 && x <= 99 ) || ( y >= 10 && y <= 99 ) )
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log( checkNums( 12, 101 ) );
console.log( checkNums( 52, 80 ) );
console.log( checkNums( 15, 99 ) );