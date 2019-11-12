function reverse(number) {
  var revNum  =  number.split('').reverse().join('');
  return revNum;
}
console.log(reverse('1235'));
