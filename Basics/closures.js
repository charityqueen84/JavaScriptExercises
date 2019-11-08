//you can embed one block inside of another. In JS, functions are no exception. Syntax a bit different. 

/*function add(num1, num2) {
    function innerAdd(first, second) {
        return first + second;
    } 
    return innerAdd(num1, num2); */
    //instead of return num1 + num2. As soon as outer block is called, inner block automaticlly called.
    //as soon as function add was called, function innerAdd was automatically operational. When we call the outer function and
    //pass it the two arguments, the return statement of the outer function (add) makes a call to the inner function and passes
    //the 2 arguments to it. innerAdd is then doing the actual work and returning the result back to the outer function, which
    //in turn is returning the result back to the caller. 
//}
//console.log(add(4, 6));
//console.log(innerAdd(4, 6)); //if you try to call inner function without calling the outer function (add). innerAdd not defined
//once outer function has completed its job, inner function like block variables, ceases to exist. 
//This is where closures come into play. 

/*function add(num1) {
    return function(num2){ //when you declare a function w/o a name - this is called an anonymous function
        return num1 + num2;
    }
}
let add4 = add(4);
console.log(add4(6)); //passing an additional argument of 6.
console.log(add4(13)); */
//When variable add4 passed the first argument, it automatically went
//that num1 parameter. When we call the variable in the console and pass the second argument, it automatically went to the
//num2 parameter. The results were then returned to the console.log. 

//The outer function returned the inner anonymous function which in turn returned the calculated result. 
//in a scenario like this, we can have a variable w/ a fixed argument, and another w/ a variable argument. 

function calculation(num1) {
    let result = num1;  //block variable
    return {     //instead of declaring a function, giving it its own block.
        add: function(num2) {     //declaring a series of functions using slightly odd syntax 
            result += num2;  //still using an anonymous function, but gave it an identifier. different than giving function a name!
        },     //must put a comma here or it won't work. This whole block is a JSON object
        subtraction: function(num2) {  //we can use num2 b/c this num2 has nothing to do w/ the first 
            result -= num2;
        },
        multiplication: function(num2) {
            result *= num2;
        },
        division: function(num2) {
            result /= num2;
        },
        getResult: function() {      //gets back result
            return result;
        }
    }
}
let myCalc = calculation(0);
myCalc.add(43); //calling add block and passing it whatever number I want. 
console.log(myCalc.getResult()); //to check my balance
myCalc.multiplication(3);
console.log(myCalc.getResult());
//we must first have a variable call the outer function. Once you have called that outer
//function, those inner function blocks are available and don't go away as before. However, we have to use something
//called dot notation. We start w/ the name we call the outer function with followed by a period, followed by the block you want.
//if I wanted to multiply the result by 3, add another myCalc.multiplication(3)

//this is a powerful way to organize group and have functions interacting when there are common variables such as result variable here.
