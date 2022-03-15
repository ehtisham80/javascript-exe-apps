const getNativeType = val =>
    val === undefined ? 'undefined' : val === null ? 'null' :
        val.constructor.name.toLowerCase();
console.log( getNativeType( new Set( [ 1, 2, 3 ] ) ) );
        