function addedFrontBack (str)
{
    if ( str.length >= 3 )
    {
        strLength = 3;

        back = str.substring( str.length - 3 );
        return back + str + back;
    }
    else
        return false;
}
console.log( addedFrontBack( "abc" ) );
console.log( addedFrontBack( "ab" ) );
console.log( addedFrontBack( "abcd" ) );