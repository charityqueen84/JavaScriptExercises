let num = 50;
switch(num) {
    case 1:
        console.log('The number is 1');
    break;
    case 2:
        console.log('The number is 2');
    break;
    case 3:
        console.log('The number is 3');
    break;
    case 4:
        console.log('The number is 4');
    break;
    default:
        console.log('This is not a valid number');
    break;
        
}
num = 50; //i can do a new one, but no let since I already established num as a variable.
switch(true) { //can use boolean - ask each of the cases if they are true 
    case num == 1: //if this returns false, it's going on to the next case. can also use strict comparison === here.
        console.log('The number is 1');
    break;
    case num == 2:
        console.log('The number is 2');
    break;
    case num == 3:
        console.log('The number is 3');
    break;
    case num == 4:
        console.log('The number is 4');
    break;
    case num > 40:
        console.log('The number is greater than 40');
    break;
    default:
        console.log('This is not a valid number');
    break;
        
}

