const isBrowser = () => ![ typeof window, typeof document ].includes( 'undefined' );

console.log( isBrowser() ); // true (browser)
console.log( isBrowser() ); //false (Node)
