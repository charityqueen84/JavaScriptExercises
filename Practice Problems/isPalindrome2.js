function isPalindrome(word) {
    var wordArray = word.split('');
    var pal = wordArray.filter(function(noSpace) {
        return noSpace !== ' ';
    });
    if (word === pal) { //need reverse  - where?
        return true
    }
    return false;
}
console.log(isPalindrome('sees')); 

//when I have reverse on line 2, it always comes out as false. 

//remove spaces first - str.replace(/\s+/g, '');