/*

Create a function that takes 2 parameters, ‘num1’ and ‘num2’ and that returns
the sum of all whole numbers between num1 and num2 inclusive.
(4, 10); // returns ‘49’
(10, 4); // returns ‘0’
*/

    function sumNumbers(num1, num2) {  
        let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
        
    }  
    return sum;
    
}
console.log(sumNumbers(4, 10));  




    




