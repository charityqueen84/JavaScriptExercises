function isPalindrome(word) {
    var wordArray = word.split(' ');
    var pal = wordArray.filter(function(noSpace) {
        return noSpace !== '';
    });
    if (word === pal) {
        return true;
    }
    return false;
}
console.log(isPalindrome('sees'));
