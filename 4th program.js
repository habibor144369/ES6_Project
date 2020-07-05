//1st methode normal function diclearation.......
function doubleIt(number){
   const add = number * 2;
    return add;
}
const result = doubleIt(10);
console.log(result);


// function diclearetion in variable.....
const  doubleIt = function myFunction(number){
    const add = number * 2;
     return add;
 }
 const result = doubleIt(10);
 console.log(result);


 //arrow funtion diclearetion methode singel pera mitter...
 const doubleIt = num => num * 2;
 const result = doubleIt(100);
 console.log(result);


 //arrow funtion diclearetion methode double pera mitter...
 const doubleIt = (num1, num2) => num1 * num2;
 const result = doubleIt(50, 50);
 console.log(result);
 

//arrow funtion diclearetion methode ()empty pera mitter..
const giveMe = () => 15;
const result = giveMe();
console.log(result);


//funtion diclearetion methode ()empty pera mitter..
const giveMe = () => 15 + 10;
const result = giveMe();
console.log(result);


 //arrow funtion diclearetion methode ()empty pera mitter..
 const giveMe = () => 15 + 10;
 const result = giveMe();
 const total = result * 2;
 console.log(total);


//arrow function diclearation with {} braket....and menually call return funtion.
const doMath = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const result = sum * minus;
    return result;
}
const tottal = doMath(10, 5);
console.log(tottal);


 //  arrow function diclearation with {} braket....and menually call return funtion. and doing to defult value defined..
 const doubleIt = (num1, num2) => {
    if(num2 == undefined){
        num2 = 0;
    }
    result = num1 + num2
    return result;
 }
 const result2 = doubleIt(50, 50);
  total = result2 * result2;
 console.log(total);
