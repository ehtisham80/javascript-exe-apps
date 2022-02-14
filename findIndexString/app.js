function checkStringIndex ( str )
{
    if ( str.length < 6 )
    {
        return str;
    }
    let resultString = str;
    if ( str.substring( 10, 4 ) == 'Script' )
    {
        resultString = str.substring( 0, 4 ) + str.substring( 10, str.length );
    }
    return resultString;
}

console.log( checkStringIndex( "JavaScript" ) );
console.log( checkStringIndex( "CoffeeScript" ) );