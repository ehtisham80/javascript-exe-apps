const HammingDistance = ( num1, num2 ) => ( ( num1 ^
    num2 ).toString( 2 ).match( /1/g ) ||
    '').length;
console.log( HammingDistance( 2, 3 ) );
console.log( HammingDistance( 5, 3 ) );