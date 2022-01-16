function startsSpec ( str )
{
    if ( str.length < 4 )
    {
        return false;
    }
    front = str.substring( 0, 4 );
    if ( front == 'Java' )
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log( startsSpec( "JavaScript" ) );
console.log( startsSpec( "Java" ) );
console.log( startsSpec( "Python" ) );