function count(sentence) {
    var words = sentence.split(' ');
    var newWords = words.filter(function(empty){
        return empty !== '';
    });
    return newWords.length;
}
console.log(count('I like outer   space'));

//variable = parameter.split(' ')
//variable to represent new array = original array.filter(function(parameter2){
    //return parameter2 !== '';
//});
//return new array.length
//}
//print it out