/* 
Create a function ‘sumNested’ that sums up all the numbers in an array and nested arrays.
Example:
sumNested([1, 1, 1, [3, 4, [8]], [5]]); // returns 23 (1 + 1 + 1 + 3 + 4 + 8 + 5 = 23
sumNested([]); // returns 0 */

function nestArray(arr) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; i++) {
            console.log(arr[i][j]); 
        }
       
    }    
}
console.log(nestArray([i][j]));
