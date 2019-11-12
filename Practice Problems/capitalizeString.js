/* Exercise 6: String Capitalization
Create a function ‘capitalize’ that takes a single string parameter.  The function should return a string with the first letter 
in each word from the input string capitalized.
Example:
capitalize(“i love to code!”); // returns “I Love To Code!”*/

function capitalize(sentence) {
    var words = sentence.split(' '); //used to split a String object into an array of strings by separating the string into substrings.
    var newWords = []; //creates an empty array to push elements into, with the name of newWords
    for (var i = 0; i < words.length; i++) { //starting at 0, i goes the length of words. just looping through.
        newWords.push(words[i].charAt(0).toUpperCase()+words[i].slice(1)); 
        console.log(newWords); /*Don't need this - it shows [ 'I' ]
                                [ 'I', 'Love' ]
                                [ 'I', 'Love', 'To' ]
                                [ 'I', 'Love', 'To', 'Code!' ] */
        
    }
    console.log('---------'); //this is just so it's easier to read
    console.log(words); //This shows [ 'I', 'love', 'to', 'code!' ] - the old array 
    console.log(newWords); //This shows ['I', 'Love', 'To', 'Code!'] - the new array
    return newWords.join(' ');
}
console.log(capitalize('I love to code!'));

/*
The charAt() method is used to get the specified character from a string.
str.charAt(index), where index represents an integer between 0 and 1-less-than the length of the string.
A string representing the character at the specified index; empty string if index is out of range. charAt(0) is the character at index 0.
The slice() method returns a shallow copy of a portion of an array into a new array object.
The push() method is used to add one or more elements to the end of an array and returns the new length of the array.
After completing the for loop return the final string :
return newWords.join(' ');
The join() method joins all elements of an array into a string. The opposite of split
*/