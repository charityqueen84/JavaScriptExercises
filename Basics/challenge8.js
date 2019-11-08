let cities = ['St. Louis', 'San Francisco', 'Hurricane', 'Boston', 'Nashville'];
cities.forEach(function(names, position) {
    let count = position + 1;
    console.log(count + '. ' + names); //originally I used for loop, but I didn't need it. 
//note - I realized I had cities instead of names, so it printed the whole array 5 times (once on each line)
});

console.log('----------------------------------------------------------------------------');
console.log('For of loop - simpler than for each');
console.log('----------------------------------------------------------------------------');

let cities2 = ['St. Louis', 'San Francisco', 'Hurricane', 'Boston', 'Nashville'];
for(let myCities of cities2){ //myCities is just a variable I picked, of, and then name of array you want to loop through
    console.log(myCities);  //myCities serves as the retriever of the elements. 
//simpler than for each loop. 
}