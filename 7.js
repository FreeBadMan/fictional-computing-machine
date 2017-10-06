for(var i=1; i<=100; i++){
    var fizz = '',
        buzz = '';
    if(i%3===0){fizz='Fizz'};
    if(i%5===0){buzz='Buzz'};
    if(fizz='Fizz' || buzz = 'buzz'){
        console.log(i+" : "+fizz+buzz);
    }
};