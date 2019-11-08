let num1 = 17;
let num2 = 3;
console.log(num1 % num2); // % is the remainder

//challenge 

if (num1 % 2 == 0) {
    console.log('num1 is even');
}else{
    console.log('num1 is odd');
}

//or could have done  != console.log number is odd

let num = 5;
//num = num + 1; but use below for more concise code:
//console.log(num++); //returns 15 this is called the post variable operator and it returns the number first and then adds.  add before - pre incrementer. before it returns value, increment it. 
//console.log(num); //returns 16

//console.log(++num); //now this returns 16
//console.log(num);
//what if you want to change variable by number other than 1? Increase by 5. 
//num = num + 5
//use num += 5;
// num -=, num /=, num *=, num %= all work too. subtraction assignment operator, division assignment operator, etc 
console.log(num);

//Ternary operator for (relatively simple) if else structure:

//is num larger than 10 or not? 
let howLarge = (num >= 10) ? 'The number is larger than 10' : 'The number is less than 10';
//set variable | the condition | ? | statement that runs if condition is true |: statement that runs if condition is false     
console.log(howLarge);
