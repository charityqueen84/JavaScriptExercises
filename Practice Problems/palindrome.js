function isPalindrome(word) {
    var revWord  =  word.split('').reverse().join('');   
    if (word === revWord){
      return true;
    }
    return false;
    
  }
  console.log(isPalindrome('chicken'));

  //split array loop through filter out then reverse and join 

