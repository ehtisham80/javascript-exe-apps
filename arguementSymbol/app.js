const isSymbol = val => typeof val==='symbol';
console.log( isSymbol( Symbol( 'x' ) ) );
console.log( isSymbol( Symbol( 1 ) ) );
console.log( isSymbol( Symbol( ')' ) ) );
