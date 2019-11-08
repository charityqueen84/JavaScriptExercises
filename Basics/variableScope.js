/*let firstName =  'Jane';   //function can use this declared variable

function welcome() {
    let lastName = 'Smith';
    console.log('Welcome ' + firstName +  ' to variable scope');
}
function hello() {
    console.log('Hello ' + firstName + ' ' + lastName);
}
welcome();
hello();

//error message that lastName is not defined. 
//firstName is not located inside any box, such as functions, decisions structures, or looping structures. 
//when that happens, we say the variable is global in scope - can be used by any of the code at any time. 
//lastName is located inside the code block of the function welcome. When a variable is located inside a block, 
//it's block scoped. Can only be used by that block and can't be seen by any code outside of that block. 
//once the block does its job, the variable is erased from memory. 
//

for(let i = 0; i < 10; i++) {
    //i is a block scope variable and can only be seen by that for loop. Once loop finishes, i ceases to exist. 
} */

//contradiction:
//let firstName = 'John';
//function welcome() {
    //let firstName = 'Jane';
    //console.log('Hello ' + firstName /*+ ' ' + lastName*/); //this won't work because of scope variable
    //if(true) {
        //let lastName = 'Smith';
        //console.log('Hello ' + firstName + ' ' + lastName);
    //}
//}
//welcome();   //can the inner block of the if structure see the variable firstName of the outer block? Yes
//When you have embedded blocks, inner block can see the variables in the outer block, but not the other way around. 
//first looks in local area, then global, and if it can't find there - undefined

//now if we run by setting john as first name, it finds Jane. It first looks in its own block and when found variable,
//didn't bother to look any further up the hierarchy. THIS IS NOT SUGGESTED

//MORE BAD PROGRAMMING:

function welcome() {
    firstName = 'Jane'; //we removed let here. Moves it up to global scope. 
    if(true) {
        let lastName = 'Smith';
    }
}
welcome();
console.log('Hello ' + firstName);

//this shouldn't work, but it does. Why? WHen a variable is set without using keyword let, it automatically becomes a global 
//variable!! So console.log is able to read it. DO NOT DO THIS.

