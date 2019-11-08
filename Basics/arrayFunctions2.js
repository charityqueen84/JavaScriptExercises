let cities = ['New York', 'London', 'Paris', 'Berlin'];
console.log(cities.sort()); //sorting through array to list alphabetically (or numerically)

//return data from an array that meets a certain criteria: filtering, but not as simple as the other array functions. 
console.log(cities.filter(function(city){
    return city == 'Paris';  //since we're working w/ a function and want to see a result, have to use keyword return

}));
//remember that filtering is case sensitive!


