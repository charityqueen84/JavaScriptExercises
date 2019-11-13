/* 
Exercise 7: Fizz Buzz Exercise
Create a JavaScript function ‘fizzBuzz’ that takes 1 parameter, ‘n’.  The function should return a string that contains the following for each number between 1 and n.
• If n <= 0
o Return an empty string
• If n > 0
o Print the number
o If the number is divisible by 3 write ‘fizz’
o If the number is divisible by 5 write ‘buzz’
o If the number is divisible by 3 and 5 write ‘fizzbuzz’
Example:
fizzBuzz(0);    // returns ‘’
fizzBuzz(15);  // returns  ‘1, 2, 3fizz, 4, 5buzz, 6fizz, 7, 8, 9fizz, 10buzz, 11, 12fizz, 13, 14, 15fizzbuzz’
 */

 function fizzBuzz(n) {
     for (let i = 1; i <= n ; i++){
     if (n <= 0) {
        console.log(' ');
    }else if ((i % 3 == 0) && (i % 5 == 0)){
        console.log('fizzbuzz');
     }else if (i % 3 == 0) {
         console.log('fizz');
     }else if (i % 5 == 0) {
         console.log('buzz');
     }else{
         console.log(i);
     }
     }
    }
     fizzBuzz(15);

 