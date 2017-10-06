for(i=100; i<1000; i++){
    var digit1 = i%10;
    var digit2 = ((i-i%10)/10)%10;
    var digit3 = ((i-i%100)/100)%10;
    if (digit1*digit1*digit1+digit2*digit2*digit2+digit3*digit3*digit3===i){
        console.log(i+" - Число Армстронга!");
    };
}