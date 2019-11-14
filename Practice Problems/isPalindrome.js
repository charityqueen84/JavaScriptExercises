function isPalindrome(word) {
    var revWord  =  word.split('').reverse().join('');   
    if (word === revWord){
      return true;
    }
    return false;
    
  }
  console.log(isPalindrome('chicken'));