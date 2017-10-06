var a = window.prompt("Первое чиселко", "0"),
    b = window.prompt("Второе чиселко","0");
If (parseInt(a, 10)>parseInt(b,10)){
    console.log("Из чисел "+a+" и "+b+" большим является "+a);
} else if (parseInt(b, 10)>parseInt(a, 10)){
    console.log("Из чисел "+a+" и "+b+" большим является "+b);
} else console.log("Числа "+a+" и "+b+" равны!");