/*
Use the Pythagorean Theorem to create a function that uses parameters ‘a’ and ‘b’ to calculate 
the length of the hypotenuse of a right triangle. If a or b is less or equal to 0, return 0.
(12, 5) returns 13 */

function getHypLength(a, b) {
    if (a <= 0 || b <= 0) {
        return 0;
    }else{
    var length = (a*a) + (b*b);
    var lengthSq = Math.sqrt(length);
    return 'The length of a hypotenuse is ' + lengthSq;
    }
    

}
console.log(getHypLength(12, 5));

