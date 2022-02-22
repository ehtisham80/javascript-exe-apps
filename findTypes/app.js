function findAngleTypes (angle)
{
    if ( angle < 90 )
    {
        return "acute angle.";
    }
    if ( angle === 90 )
    {
        return "Right anlge";
    }
    if ( angle < 180 )
    {
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

console.log( findAngleTypes( 47 ) );
console.log( findAngleTypes( 90 ) );
console.log( findAngleTypes( 145 ) );
console.log(findAngleTypes(180));