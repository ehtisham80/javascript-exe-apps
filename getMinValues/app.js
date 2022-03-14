const getMinValues = ( arr, n = 1 ) => [...arr ].sort( ( a, b ) => a - b).slice( 0, n );

console.log( getMinValues([1, 2, 3 ]) );
console.log( getMinValues( [ 1, 2, 3 ], 2 ) );
