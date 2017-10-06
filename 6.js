var students =[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
    Sum = 0,
    mark = '';
for(i in students){
    Sum += students[i][1];
}

var avr=(Sum)/students.length;
if (avr < 60){
    mark =" F";
}
else if (avr < 70) {
    mark =" D";
}
else if (avr < 80) {
    mark ="  C";
} else if (avr < 90) {
    mark =" B";
} else if (avr < 100) {
    mark = " A";
};
console.log("Средняя оценка: " + avr + " =>"+ mark);