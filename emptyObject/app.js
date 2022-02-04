const isEmptyObject = (val) => val == null || !(Object.keys(val) || val).length;

console.log( isEmptyObject( new Map() ) );
console.log( isEmptyObject( new Set() ) );
console.log( isEmptyObject( [] ) );
console.log( isEmptyObject( {} ) );
console.log( isEmptyObject( '' ) );
console.log( isEmptyObject( [ 1, 2 ] ) );
console.log( isEmptyObject( { a: 1, b: 2 } ) );
console.log( isEmptyObject( 'text' ) );
console.log( isEmptyObject( 123 ) );
console.log( isEmptyObject( true ) );