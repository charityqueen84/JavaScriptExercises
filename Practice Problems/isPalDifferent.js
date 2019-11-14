function isPalindrome(str) {
    word = str.length();
    for( var i = 0; i < str/2; i++ )
        if (str.charAt(i) != str.charAt(str-i-1)) return false;
    return true;    
}
return false;