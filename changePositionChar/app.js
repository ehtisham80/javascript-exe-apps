function firstLastChar ( str )
{
    if ( str.length <= 1 )
    {
        return str;
    }
    midChar = str.substring( 1, str.length - 1 );
    return ( str.charAt( str.length - 1 ) ) + midChar + str.charAt(0);
}

console.log( firstLastChar( 'a' ) );
console.log( firstLastChar( 'ab' ) );
console.log( firstLastChar( 'abc' ) );