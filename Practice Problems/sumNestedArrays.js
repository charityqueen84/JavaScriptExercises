/* 
Create a function ‘sumNested’ that sums up all the numbers in an array and nested arrays.
Example:
sumNested([1, 1, 1, [3, 4, [8]], [5]]); // returns 23 (1 + 1 + 1 + 3 + 4 + 8 + 5 = 23
sumNested([]); // returns 0
*/

function sumNested(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') { //if it's a number, sum + the number
        sum += arr[i];
        }else if (arr[i] instanceof Array) {  //if it's an array, we're using recursion.
        sum += sumNested(arr[i]);
        }
        //console.log(arr[i]); // this prints 1 1 1 3 4 8 [8] [3, 4, [8]]  5
        //console.log(sum); // this sort of prints the running total (1, 2, 3, 3, 7, 8, 15, 18, 5, 23, 23) 
    }
    //console.log(i); //this prints the number of elements in the array
    //console.log(arr); //this just prints the actual array in brackets
    return sum; //putting this here makes everything add up. Prints total sum. (it's undefined if this isn't here)
}
console.log(sumNested([1, 1, 1, [3, 4, [8]], [5]]));