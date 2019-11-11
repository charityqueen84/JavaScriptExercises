
/*Create a function that takes a string parameter named ‘sentence’. The function should return 
the count of words in the ‘sentence’ parameter string. A word is considered any series of characters 
(letter, number, punctuation) separated by one or more spaces.

(‘This is a short sentence!’);  // returns 5
(‘ThisIsA!$ReallyLongWord’); // returns 1
(‘     ‘); // returns 0 */

//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
function countWords(sentence) {
    var words = sentence.split(' '); //saving the whole string into separate words with a comma in between each word
    //to take out extra spaces
    var next = words.filter(function(noSpace)  { //Filtering out anything that is a blank space. This could also be written as words.filter(noSpace => {
        return noSpace !== ''; //It is an array containing all the array elements that pass the test. 
        //If no elements pass the test, it returns an empty array. If all elements pass the test, the array is returned with the elements.
    });   
    return next.length; //Returning next.length here instead of words.length. 
 
   
}
console.log(countWords('This is a short sentence!'));

//This works, but counts empty spaces as words. Above, using filter to filter out empty spaces.
//function wordCount(sentence) {
    //var words = sentence.split(' ');
    //return words.length;  //return words also shows the elements separated by a comma

//}
//console.log(wordCount('This is a short number!));