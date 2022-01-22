function ComputeValue ( b, n )
{
    var ans = 1;
    for ( let i = 1; i <= n; i++ )
    {
        ans = b * ans;
    }
    return ans;
}

console.log( ComputeValue( 2, 3 ) );