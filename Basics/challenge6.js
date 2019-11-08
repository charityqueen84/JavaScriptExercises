/*create a function that converts miles to kilometers
km= miles/0.62137
Once created, call the function 3 times, each with a different miles argument
Within the function, will need a parameter to accept miles, a variable to do the conversion, and a return statement to
return the results to the caller */


let conversion = function(miles = 1) { //set default as 1 in case a parameter isn't passed 
    let kilometers = (miles/0.62137);
    return miles + ' miles is equal to ' + kilometers + ' kilometers';

}
console.log(conversion(50)); //returns return string here (to the caller)
console.log(conversion(30));
console.log(conversion(15));
console.log(conversion());