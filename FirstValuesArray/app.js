var FirstValuesArray = function ( input )
{
    if ( toString.call( input ) === "[object Array]" )
        return true;
    return false;
};

console.log( FirstValuesArray( 'Javascript Programming!' ) );
console.log( FirstValuesArray( [ 1, 2, 3, 4, 0 ] ) );
