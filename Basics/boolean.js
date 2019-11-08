//two variables for comparison
let num1 = 15;
let num2 = "15"; //single = is assignment operator. Assigns value on right to variable on left 

//variable to test for equality 
let isEqual; 
//isEqual = num1; //isEqual is now looking at the same location in memory as num1. 2 strings attached to same balloon. 
isEqual = num1 == num2; //is isEqual (which holds the same value as num1) equal to the value of num2?)
console.log(isEqual); //we get a value of true. == compares value on left side to val on right side to see if they're equal.

//if I surround num2 with quotes, and run it again, it still returns true. When JS sees a number by itself in quotes, 
//it treats it as a number and not a string. 

//if I put a third equal sign in
isEqual = num1 === num2; //this is false. Compares not only a value, but the type of value. num1 is number, num2 is a string. Returns false.
console.log(isEqual);

//Script comparative operator === - most programmers prefer this over ==. Result is usually more accurate. 

isEqual = num1 !== num2; //true b/c num1 is a number and num2 is a string. is num1 not equal to num2? 
console.log(isEqual);

//if you change num2 back to a number, you get back false. 

num1 = 15;
num2 = 15;
isEqual = num1 > num2;
console.log(isEqual); //false because 15 is not greater than 15. 

isEqual = num1 >= num2;
console.log(isEqual); //true b/c they're equal

/*can I do strict comparison? no. greater than can only be used w/ one equal sign
isEqual = num1 >== num2;
console.log(isEqual); */

isEqual = num1 < num2;
console.log(isEqual); //false

isEqual = num1 <= num2;
console.log(isEqual); //true 

/*
== equality Operator
=== strict equality Operator 
> greater than operator
>= greater than or equal to operator 
< less than operator 
<= less than or equal to operator
! NOT 
*/