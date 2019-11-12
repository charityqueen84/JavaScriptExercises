function count(sentence) {
    var words = sentence.split(' ');
    var newWords = words.filter(function(empty){
        return empty !== '';
    });
    return newWords.length;
}
console.log(count('I like outer   space'));