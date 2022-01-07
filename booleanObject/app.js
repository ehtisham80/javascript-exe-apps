const isBooleanObject = obj => obj === Object( obj );

console.log( isBooleanObject( [1, 2, 3, 4] ) );
console.log( isBooleanObject( [] ) );
console.log( isBooleanObject([ 'Hello!' ]) );
console.log( isBooleanObject( { a: 1 } ) );
console.log( isBooleanObject( {} ) );
console.log( isBooleanObject( true ) );