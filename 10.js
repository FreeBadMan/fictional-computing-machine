var st = window.prompt("Введите количество ступенек", "5");
var i,j,brick;
for (i=1; i<=(parseInt(st,10)+1); i++){
    for(j=1; j<i; j++){
        brick=brick+"*";
    }
    console.log(brick);
    brick='';
}