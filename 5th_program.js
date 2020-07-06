//Array concated methode in JavaScript Program......
const ages = [10, 12, 14, 16];
const ages2 = [20, 22, 24, 26];
const ages3 = [30, 32, 34, 36];
const allAges = ages.concat([100,200]).concat(ages2).concat([100,200]).concat(ages3).concat([100,200]); //.concat([100,200]) new element adding in array.
console.log(allAges);


// this methode give me separet array.. 
const ages = [10, 12, 14, 16];
const ages2 = [20, 22, 24, 26];
const ages3 = [30, 32, 34, 36];
const allAges = [ages, ages2, 65, ages3];
console.log(allAges);


// this methode give me 1 array....its spreid out methode... all array adding methode...
const ages = [10, 12, 14, 16];
const ages2 = [20, 22, 24, 26];
const ages3 = [30, 32, 34, 36];
const allAges = [...ages, ...ages2, 100, 200, ...ages3]; // 100, 200 new ellement adding in array..
console.log(allAges);


// cheack to max number....
const business = 670;
const minister = 560;
const sochip = 770;
const maximum = Math.max(business, minister, sochip);
console.log(maximum);


// cheack to min number....(min = smalll)
const business = 670;
const minister = 560;
const sochip = 770;
const maximum = Math.min(business, minister, sochip);
console.log(maximum);


// check to max element in array....
const Numbers = [20, 45, 34, 32, 56, 90, 87];
const maximum = Math.max(...Numbers); 
console.log(maximum);


// check to max element in array....
const Numbers = [20, 45, 34, 32, 56, 90, 87];
const maximum = Math.max(...Numbers, 200, 300); // 200, 300 new ellement adding in Numbers array.
console.log(maximum);


// check to min element in array....(min = smalll)
const Numbers = [20, 45, 34, 32, 56, 90, 87];
const maximum = Math.min(...Numbers); 
console.log(maximum);


// check to min element in array.... (min = smalll)
const Numbers = [20, 45, 34, 32, 56, 90, 87];
const maximum = Math.min(...Numbers, 200, 300); // 200, 300 new ellement adding in Numbers array.
console.log(maximum);
