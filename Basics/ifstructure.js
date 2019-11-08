//declare a boolean variable 
let test = true; //assignment operator to assign true to test
if (test == false) { //could use == or ===  this could also be if(test) or for a shortcut. 
    console.log('The condition is true');
}else{ 
    console.log('The test condition is false.');
}
//close of if structure

console.log('This is the code after the if structure. Just to show what it does. This is the test variable. The num variable is next');
//this will be the only thing that runs if the condition is false unless you add an else. 

//Declare a numeric variable

let num = 50;
if (num >75) {
    console.log('The number is greater than 75');
}else if(num < 35){
    console.log('The number is less than 35');
}else if(num == 50) {
    console.log('The number is 50');
}else if(num > 45) {
    console.log('The number is greater than 45'); //this won't run because the test before was true. Processing stops as soon as it hits first true block
}else{
    console.log('The condition is false');
}
console.log('This is the code after the if statement. Before and and or assignment operators');

//Test multiple conditions using and or or operators w/ if else

let num1 = 50;
let num2 = 25;

if((num1 > 45) && (num2 <= 25)) {
    console.log('Both of the conditions are true');
}else{ 
    console.log('None of the conditions are true'); 
}

    



