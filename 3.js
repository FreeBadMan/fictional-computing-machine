var a = window.prompt("Первое чиселко", "0"),
    b = window.prompt("Второе чиселко", "0"),
    c = window.prompt("Третье чиселко", "0");
if (parseInt(a, 10)>parseInt(b, 10) && parseInt(a, 10)>parseInt(c, 10))
{
    if (parseInt(b, 10)>parseInt(c, 10))
    {
        console.log(parseInt(a, 10) + ", " + parseInt(b, 10) + ", " +parseInt(c, 10));
    }
    else
    {
        console.log(parseInt(a, 10) + ", " + parseInt(b, 10) + ", " +parseInt(c, 10));
    }
}
else if (parseInt(b, 10)>parseInt(a, 10) && parseInt(b, 10) >parseInt(c, 10))
{
    if (parseInt(a, 10)>parseInt(c, 10))
    {
        console.log(parseInt(b, 10) + ", " + parseInt(a, 10) + ", " +parseInt(c, 10));
    }
    else
    {
        console.log(parseInt(b, 10) + ", " + parseInt(c, 10) + ", " +parseInt(a, 10));
    }
}
else if (parseInt(c, 10)>parseInt(a, 10) && (parseInt(c, 10)>(parseInt(b, 10))
{
    if ((parseInt(a, 10)>(parseInt(b, 10))
    {
        console.log((parseInt(c, 10) + ", " + (parseInt(a, 10) + ", " +(parseInt(b, 10));
    }
    else
    {
        console.log((parseInt(c, 10) + ", " + (parseInt(b, 10) + ", " +(parseInt(a, 10));
    }
}