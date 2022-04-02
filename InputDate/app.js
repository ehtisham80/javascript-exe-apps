var InputDate = function (input)
{
    if ( Object.prototype.toString.call( input ) === "[object Date]" )

        return true;
        return false;
};

console.log( InputDate( "October 13, 2017 11:13:00" ) );
console.log( InputDate( new Date( 86400000 ) ) );
console.log( InputDate( new Date( 99, 5, 24, 11, 33, 30, 0 ) ) );
console.log(InputDate([1,2,4,0]));