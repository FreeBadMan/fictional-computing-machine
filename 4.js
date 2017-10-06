var a = window.prompt("Первое чиселко", "0"),
    b = window.prompt("Второе чиселко", "0"),
    c = window.prompt("Третье чиселко", "0"),
    d = window.prompt("Четвертое чиселко", "0"),
    e = window.prompt("Пятое чиселко", "0");
if (parseInt(a, 10)>parseInt(b, 10) && parseInt(a, 10)>parseInt(c, 10) && parseInt(a, 10)>parseInt(d, 10) && parseInt(a, 10)>parseInt(e, 10)){
    alert(a);
} else if (parseInt(b, 10)>parseInt(a, 10) && parseInt(b, 10)>parseInt(c, 10) && parseInt(b, 10)>parseInt(d, 10) && parseInt(b, 10)>parseInt(e, 10)){
    alert(b);
} else if (parseInt(c, 10)>parseInt(b, 10) && parseInt(c, 10)>parseInt(a, 10) && parseInt(c, 10)>parseInt(d, 10) && parseInt(c, 10)>parseInt(e, 10)){
    alert(c);
} else if (parseInt(d, 10)>parseInt(b, 10) && parseInt(d, 10)>parseInt(c, 10) && parseInt(d, 10)>parseInt(a, 10) && parseInt(d, 10)>parseInt(e, 10)){
    alert(d);
} else if (parseInt(e, 10)>parseInt(b, 10) && parseInt(e, 10)>parseInt(c, 10) && parseInt(e, 10)>parseInt(d, 10) && parseInt(e, 10)>parseInt(a, 10)){
    alert(e);
}