const DistanceBetween = ( x0, y0, x1, y1 ) => Math.hypot( x1 - x0, y1 - y0 );
console.log( DistanceBetween( 1, 1, 2, 3 ) );
console.log( DistanceBetween( -1, -1, 2, 3 ) );
