var a = window.prompt("Первое чиселко", "0");
var b = window.prompt("Второе чиселко","0");
var num1 = parseInt(a, 10);
var num2 = parseInt(b,10);
var b = 1;
if(num1>num2) {
    for (var i = 2; i <= (num1 / 2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
         if(i>b)
         {
             b=i;
         }
        }

    }
} else {
    for (var i = 2; i <= (num2 / 2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            if(i>b)
            {
                b=i;
            }
        }

    }
}
console.log(b);