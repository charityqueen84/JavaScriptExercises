let numbers = [4, 7, 28, 25, 15, 30, -1, 57];
numbers.sort();  //this is 2nd part of challenge - so numbers are sorted numerically
console.log(numbers.filter(function(num){  //num is the parameter name I've chosen
    return num >= 25;
    
}));

//map function:
//say we want to mutiply all the numbers by 2
console.log('===================');
console.log('Map function');
let numbers2 = [4, 7, 28, 25, 15, 30, -1, 57];

console.log(numbers2.map(function(num2){ //change filter to map
    return num2 * 2; //to multiply all the numbers by 2
}));

//to join multiple arrays together: 
console.log('===================');
console.log('Join multiple arrays together');
let numbers3 = [4, 7, 28, 25, 15, 30, -1, 57];
let stringArray = ['joined', 'together'];
console.log(numbers3.concat(stringArray));    //original array.concat(arrayToBeJoined). Original array is NOT changed
console.log(numbers3);  //test to make sure original array has not been changed

//changing concat to join
console.log('===================');
console.log('change concat to join');
//let numbers4 = [4, 7, 28, 25, 15, 30, -1, 57];
//let stringArray2 = ['joined', 'together'];
//console.log(numbers4.join(stringArray2)); //changed concat to join
//weird message
//b/c join converts original array to an array of strings and then concatenates each element of the array 
//with the contents of the second array. Number, element of 2nd array, number, word together, etc. Not
//a very pleasant result.
//more typical use: change how we want the output of the original array to display. 
//say we want to display the array w/ 3 periods in between each element. Below:

let numbers4 = [4, 7, 28, 25, 15, 30, -1, 57];
let stringArray2 = ['...'];
console.log(numbers4.join(stringArray2)); 

//Reverse function:
console.log('===================');
console.log('Reverse function');

let numbers5 = [4, 7, 28, 25, 15, 30, -1, 57];
console.log(numbers5.reverse());  //reverses elements of array

//Reduce function: used mostly for numeric arrays 
console.log('===================');
console.log('Reduce function');
//say we want to sum all the elements of the array: 

let numbers6 = [4, 7, 28, 25, 15, 30, -1, 57];
console.log(numbers6.reduce(function(result, number){
    return result + number;  //it loops through array, saves total to point to first parameter, so that will hold
    //the total. Then it loopsto the next number and brings that into the second parameter. It then adds that
    //number to the total and saves the result to the first parameter.
    //first time it runs, it sets result parameter to 0. and then adds 4, then saves that total back to result, 
    //and goes to the next number, which is 7, and adds it to 4, etc. 

}));   

//Similar, but different syntax to anonymouse function - w/ anonymous function it takes a single param, 
//but when we create the reduce function, we need 2 parameters. You can call them whatever you want. 
//the return statement has to add the 2 parameters. 






