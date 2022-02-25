function firstThreeChar (str)
{
    if ( str.length <= 3 )
    {
        return str.toUpperCase();
    }
    frontPart = ( str.substring( 0, 3 ) ).toLowerCase();
    backPart = str.substring( 3, str.length );
    return frontPart + backPart;
}
console.log( firstThreeChar( "Python" ) );
console.log( firstThreeChar( "Py" ) );
console.log( firstThreeChar( "JAVAScript" ) );

