let cities = ['New York', 'London', 'Paris', 'Berlin'];

cities.push('Miami');  //adds element to end of array. This is good, especially if we don't know length of array. In paren, new element I want to put in.
cities.pop();
console.log(cities.pop()); //pop removes last element. BUT it also returns value of element you're removing. if you surround cities.pop w/ a console
cities.unshift('Dublin'); // unshift adds new element at beginning of array
cities.shift();          //shift removes first element 
console.log(cities.shift());  //print out element removed
console.log(cities);
console.log(cities.indexOf('Paris'));//locate index number of an element. indexOf. 
//BUT remember search is case sensitive. if i search for paris in lowercase, I get -1 (failed).
//we want to create a brand new array with just Paris and Berlin. So I add Berlin back:
cities.push('Berlin');
console.log('This is the cities array');
console.log(cities);
console.log('This is the newCities array');
//let newCities = cities.splice(1); //take a few elements and create a new array. newCities is new array name. 1 is the index position.
//this says move all the elements from the cities array from index position 1 on (which we know is Paris and Berlin). Could use 0 or 2, or any index if I have more
//console.log(newCities);
console.log('----------------------');
//alternative syntax: we want just London and Paris in our new array. We can modify splice method w/ 2 params 
console.log('This is the newCities2 array');
let newCities2 = cities.splice(0, 2); //this says begin w/ position 1 and use 2 elements. 
console.log(newCities2); //(I commented out the newCities array so this one would work)
//one caveat w/ splice - elements get moved, not copied to new array
console.log(cities); //so London is gone from cities array, and it's just Berlin now
//if you want to copy elements, and not move them, then you must use 
console.log('New array to use slice method');
let citiesNew = ['St. Louis', 'San Francisco', 'Boston', 'Paris', 'Rome'];
console.log(citiesNew);

let newCitiesNew = citiesNew.slice(1,3); //syntax changes slightly. This says beginning index number, ending index 
//number. but last number is not inclusive! So this one says begin at position 1 and stop at 3 (but 3 not included)
//so should be start at San Fran and end at Paris, but Paris not included
console.log(newCitiesNew);