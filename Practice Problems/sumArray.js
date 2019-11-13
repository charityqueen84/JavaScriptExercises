/* 
Exercise 8: Sum nested array 
Create a function ‘sumNested’ that sums up all the numbers in an array and nested arrays.
Example:
sumNested([1, 1, 1, [3, 4, [8]], [5]]); // returns 23 (1 + 1 + 1 + 3 + 4 + 8 + 5 = 23
sumNested([]); // returns 0
*/

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        //console.log(arr[i]); // this prints 2, 4, 6 (the numbers in the array vertically instead of in brackets)
        console.log(sum); // this prints the running total (2, 6, 12)
        
    }
    console.log(i); //this prints the number of elements in the array
    console.log(arr); //this just prints the actual array in brackets
    return sum; //putting this here makes everything add up. Prints total sum. 
}
console.log(sumArray([2, 4, 6,]));


