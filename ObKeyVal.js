


let myObj =  {
    'name' : 'Charity', 
    'age' : 35,
    'fave' : 'space',
    'food' : 'pizza'

};
function printKeyValues(person) {
for (person in myObj) {
    console.log(person + ': ' + myObj[person]);


}
}
printKeyValues(myObj);
