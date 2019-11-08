//create a function called sum //THIS IS THE FIRST WAY: DECLARED FUNCTION
/*function sum() {      //this is a function signature 
    let num1 = 2;
    let num2 = 3;
    let sum = num2 + num2;

console.log('The total of ' + num1 + ' and ' + num2 + ' is ' + sum);
}
//a function cannot run unless there is a specific call to it somewhere within the code

sum();  //call to the function */
//--------------------------------------------------------------------
//OR second way of doing a function: //2ND WAY: FUNCTION EXPRESSION 
/*let sum2 = function() { //this is a function expression. Name of variable within function name. Could give more flexibility
    let num3 = 5;
    let num4 = 6;
    let sum2 = num3 + num4;
//console.log('The total of ' + num3 + ' and ' + num4 + ' is ' + sum2);
return 'The total of ' + num3 + ' and ' + num4 + ' is ' + sum2;  //this replaces the console.log
//return is very last line of function. Once a function encounters a return statement, it ends its work.
//return statement returns whatever is in the statement to whoever is calling the function (in this case, the 
//variable sum2 is calling the funtion, and the function is reterning the concatenated string back to it).

}
//sum2();
//sum2();
//sum2();
console.log(sum2()); //when you call a function expression, you must use the parentheses
//you get an undefined result. When you declare a variable and do not get a value, it's default value is undefined. 
//Even though we made the variable sum2 equal to the results of the function, nothing has been saved to the variable.
//in order for that to happen, we need to get rid of console.log within function and replace w/ return. */


//So now, let's take that same function and do something different: 

let sumSecond = function() {
    let num3 = 5;
    let num4 = 6;
    let sum2 = num3 + num4;
    return 'The total of ' + num3 + ' and ' + num4 + ' is ' + sum2;
}
//console.log(sumSecond());
let total = sumSecond; //Just for experiment, replace the console with this. total and sum are looking at the same container in memory
console.log(total());    //You won't run into this all that often, but gives you an insight into how JS handles variables and potential function calls

//NOTES CONTINUED IN PASSINGDATATOFUNCTIONS.JS FILE




