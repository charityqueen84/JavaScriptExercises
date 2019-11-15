function isPalindrome(word) {
    var wordArray  =  word.split('');
    var pal = wordArray.filter(function(noSpace) {
        return noSpace !== '';
    });
    return wordArray;
}
    if (word === revWord){
      return true;
    }
    return false; 