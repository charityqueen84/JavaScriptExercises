
/*let sumSecond = function() { //purpose of parentheses? To pass data the function might need to do its job. 
    let num3 = 5;
    let num4 = 6;
    let sum2 = num3 + num4;
    return 'The total of ' + num3 + ' and ' + num4 + ' is ' + sum2;
}
let total = sumSecond; 
console.log(total()); */

//Create a welcome function

let welcome = function(firstName = 'First Name Missing', lastName = 'Last Name Missing') { //parameter inside parentheses. Cannot be seen by any code outside of the function. W/in function, can be used like any other variable.
    return 'Welcome ' + firstName + ' ' + lastName+ ', to the world of functions';    //we want to pass a name to a welcome message
} 
console.log(welcome('Charity', 'Queen'));
console.log(welcome('Aaron'));
console.log(welcome());

//when you make a call to the function, you must pass it the needed data. The data you pass is called an argument, and if you
//don't pass the requested data, in this case a String of firstName, you'll have a variable w/ no value assigned to it and 
//that will result in a variable w/ value undefined. Here, we'll make the call to the function within a console.log, and pass firstName as a string.
//The nice part about this is that we can call the functions as many times as we want, and each time, pass it a different name.

//will say undefined if a parameter isn't passed
//now can assign a default value to a parameter within the parentheses (like above), so that if a value isn't passed to that param, 
//don't assign it undefined, assign this value



