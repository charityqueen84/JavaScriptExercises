//create a simple array
console.log('First array');
let numArray = [3, 7, 6]; //this array has a length of 3. Index 0 = 3, index 1 = 7, index 2 = 6

numArray[2] = 50; // to change index 2 to 50.
numArray[5] = 50; //what if we assign a value to an array index that doesn't exist? Empty items or undefined (instead of out of bounds error)
console.log(numArray.length);   //what we're trying to find out info on.property/variable we're looking for  //in OOP, a variable is known as a property
console.log(numArray[1]);  //if we want to know the value of index 1 - bracket notation
console.log(numArray); //to return all elements of an array
console.log(numArray[4]); //empty/undefined if you try to access an element that doesn't exist

console.log('Array 4');
let numArray4 = []; //empty array - no elements in it
numArray4[0] = 3; //can add elements later
numArray4[1] = 7;
numArray4[2] = 6;
console.log(numArray4);

console.log('Array 5');
//to pull elements out of an array and save them to a new variable (destructuring):
let numArray5 = [3, 7, 6]; //we want to copy first 2 elements to their own variables called num1 and num2:
let[num1, num2] = numArray5   //first list variable names you want to use. Copies value of first element to num1, of second to num2, and disregards third element
console.log(num1 + ' and ' + num2); //comes back with "3 and 7". 
console.log(numArray5);   //original array left in tact
//to change first and third element but not second:
// let[num1, , num2]; leave an empty spot with commas - saves 3 to num1 and 6 to num2

//One more use of destructuring: swap values of 2 variables
console.log('Switch values of 2 elements');
let num4 = 2;
let num5 = 7;

[num5, num4] = [num4, num5]; //do not use keyword let! We're not declaring any new variables. It's saying take value of num4 and assign it to num5, and take value of num5 and assign it to num4
console.log(num4 + ' and ' + num5);



//use an object oriented technique to create an array by using keyword new (preview):
console.log('Array 2');
let numArray2 = new Array(3, 7, 6); //creates a new array using OOP technique
console.log(numArray2);

//but if you do this:
console.log('Array 3');
let numArray3 = new Array(3); //we get 3 empty items
console.log(numArray3);