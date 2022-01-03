function addTwoDigits (n)
{
    return n % 10 + Math.floor( n / 10 );
}

console.log( addTwoDigits( 25 ) )
console.log(addTwoDigits(50))