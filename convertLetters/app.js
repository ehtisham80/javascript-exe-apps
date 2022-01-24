function convertAlphabet (str)
{
    return str.split( "" ).sort().join( "" );
}

console.log( convertAlphabet( "Python" ) );
console.log( convertAlphabet( "Exercises" ) );