function checkStudExam(TotalMark, isExam)
{
    if ( isExam )
    {
        return TotalMark >= 90;
    }
    return ( TotalMark >= 89 && TotalMark <= 100 );
}

console.log( checkStudExam( "78", "" ) );
console.log( checkStudExam( "89", "true" ) );
console.log( checkStudExam( "99", 'true' ) );