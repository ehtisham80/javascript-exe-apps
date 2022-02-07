function ExtractUniqueChars (str1)
{
    var str = str1;
    var uniq1 = "";
    for ( var x = 0; x < str.length; x++ )
    {
        if ( uniq1.indexOf( str.charAt( x ) )==-1)
        {
            uniq1 += str[ x ];
        }
    }
    return uniq1;
}
console.log( ExtractUniqueChars( "thequickbrownfoxjumpsoverthelazydog" ) );
