let fahrenheit = 92;
const fToC = (fahrenheit - 32) * (5/9); //if it's never going to change, use const. 
console.log(fahrenheit + ' degrees fahrenheit is ' + fToC + ' degrees celsius');

let celsius = 37;
const cToF = (celsius * (9/5)) + 32;
console.log(celsius + ' degrees celsius is ' + cToF + ' degrees fahrenheit');

let miles = 15;
const mToK = miles * 1.609344;
console.log(miles + ' miles is ' + mToK + ' kilometers');

let kilometers = 52;
const kToM = kilometers/1.609344; //could also do (kilometers/mToK)
console.log(kilometers + ' kilometers is ' + kToM + ' miles');