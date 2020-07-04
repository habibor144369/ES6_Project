// this simple function value return....

function add(number1, number2){
    sum = number1 + number2;
    return sum
}
const total = add(20, 30);
console.log(total);

// defuld value set system.and defuld parameater set merthod..

function add(number1, number2){
    if(number2 == undefined){
        number2 = 0;
    }
    sum = number1 + number2;
    return sum
}
const total = add(20, 40);
console.log(total);

//2nd methode to programe....

function add(number1, number2){
    number2 = number2 || 10;
    sum = number1 + number2;
    return sum
}
const total = add(20, 30);
console.log(total);

// 3rd methot of program....

function add(number1, number2 = 20){
    sum = number1 + number2;
    return sum
}
const total = add(20, 2);
console.log(total);
