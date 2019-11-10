


let myObj =  {
    'name' : 'Charity', 
    'age' : 35,
    'fave' : 'space',
    'food' : 'pizza'

};
function printKeyValues(person) { //function with one parameter 
for (person in myObj) {   //for in loop: for (variable in object)
    console.log(person + ': ' + myObj[person]);


}
}
printKeyValues(myObj);
