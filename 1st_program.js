// 'const' variable decleartion seystem and concept and methode....
const hubby = "Habibor Rahaman";
//hubby = "minner";   dont allow because of variable diclearetion 'const'..
console.log(hubby);

const numbers = [2, 4, 6, 8];
numbers[1] = 10;
numbers.push(11);
//numbers = [2,45,43,]; /// dont allow because of array element doing change but all array dont change becouse of diclearetion variable to 'const'.
console.log(numbers);

// for object same here..
const car = {color:"blue", model: "DN0017", brand:"BMW Motors LTD", esemble:"USA"};
car.woner = "Habior Rahaman"; //new property add........
car.color = "RGB"; // property element changing....
delete car.esemble; // delete a property....
//car = {color:"orange", model:"ddl450", brand:"BMW Motors LTD"} // dont allow because of object element doing change but all object dont change becouse of diclearetion variable to 'const'.
console.log(car);

// 'let' variable decleartion seystem and concept and methode....
let patientName = "Rohim chacha";
patientName = "Fatema Khala"; 
console.log(patientName);
 
let sum = 0;
for(let i = 1; i < 10; i++){
    sum = sum + 1;
    console.log(i);
}
