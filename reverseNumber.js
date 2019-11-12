function reverse(number) {
  number = number + ''; // changes it to a string
  var revNum  =  number.split('').reverse().join('');
  return revNum;
}
console.log(reverse(866521)); //so I can put a number in here 


//first solution, but I realized I had  to put a number in as a string at the bottom, so above is the 
//solution to change it to a string in the code.
function reverse(number) {
  var revNum  =  number.split('').reverse().join('');
  return revNum;
}
console.log(reverse('1235'));


