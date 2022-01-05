const isArrayLike = val =>
{
    try
    {
        return [ ...val ], true;
    } catch ( e )
    {
        return false;
    }
};

console.log( isArrayLike( document.querySelectorAll( '.className' ) ) );
console.log( isArrayLike( 'abc' ) );
console.log( isArrayLike( null ) );
