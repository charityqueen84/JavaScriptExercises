const num1 = 8; //this is a statement. When we put a value into a statement, that value is called an expression. let num1 = 8 is a statement. 8 itself is an expression.
console.log('The number in the num1 variable is ' + num1); //const means value in expression cannot be changed 
//num1 = 10; this won't work b/c of const. if it's let it can be changed. 

//challenge
let num2 = 2;
console.log('The number in the num2 variable is ' + num2);
let addNum = num1 + num2;
let subNum = num1 - num2;
let multNum = num1 * num2;
let divNum = num1 / num2;
console.log('num1 plus num2 = ' + (num1 + num2)); //have to use parentheses if you want to add those 2 numbers. paren forces it to become an expression.
console.log('num1 minus num2 = ' + subNum);
console.log('num1 multiplied by num2 = ' + multNum);
console.log('num1 divided by num2 = ' + divNum);

