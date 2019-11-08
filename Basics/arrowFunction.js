//create a function to add two numbers

/*let addNumbers = function() {
    console.log('The sum of 5 and 8 is ' + (5 + 8)); 
}

addNumbers(); */

//Easier way to do this:
/*let addNumbers = num1 =>  //arrow defines the function body. num1 is parameter (need paren. if no params or more than one params)
    console.log('The sum of ' + num1 + ' and 8 is ' + (num1 + 8)); //this can be on same line up above

addNumbers(5); //passing a value of 5 */
//when there's only one statement, like here, you do not need the curly braces. The fat arrow defines the body block. 
//if there's more than one statement in the function, you still need curly braces. 
//if we're only declaring a single param, you don't even need the parentheses
//if you're passing no params or more than one, you MUST use parentheses
//so go ahead and use parentheses in all cases. 

//but we've reduced 3 lines of code to 1 line. 

//with 2 parameters

let addNumbers = (num1, num2) => {
    let total = num1 + num2;
    console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + total);

}
addNumbers(5, 8);

