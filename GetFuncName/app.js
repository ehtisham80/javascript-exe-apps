function xyz ()
{
    console.log(arguments.callee.name);
}
xyz();