//count number of vowels within a string  - couldn't get rid of error in js bin 

/*The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, 
starting the search at fromIndex. Returns -1 if the value is not found.
Syntax -> str.indexOf(searchValue[, fromIndex])
Parameters :
searchValue : A string representing the value to search for.
fromIndex(Optional)-> The index at which to start the searching forwards in the string. It can be any integer.

The character(s) of the string will be counted as vowel if the condition (vowel_list.indexOf(str1[x]) !== -1) matched. */

function vowels(input) {
  var vow = 'aeiouAEIOU'
  var vowSum=0 //initializing the sum
  for (var i=0; i <=input.length; i++) { //looping over the string and as long as it's less than the length of the input, keep going
    if (vow.indexOf(input[i]) !==-1) { //indexOf() returns the index within the string (i within in input). Returns -1 if none found.
      vowSum +=1 //adding up the number of vowels
    }
    return vowSum //returning the total number of vowels after adding up
  }
}
console.log(vowels('The quick brown fox')) //Method call 
