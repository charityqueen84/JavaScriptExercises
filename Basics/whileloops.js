//while loop does not contain a counter variable or increment operator

let test = true; //boolean variable the loop will test for
let count = 0; //serves as loop's counter

while (test) { //in parentheses, condition you're testing for. This one stads for while test == true
    if(count == 3) {//something to happen to change test to false or else you get infinite loop
        test = false; //if we didn't want 3 included, we could add break below. Stops loop running then and there. 
        //break;
    }
    console.log('The count is ' + count);
    count++//how will loop know it's reached count 3? What's going to increment variable count up to 3? B/c increment operator is not 
    //part of structure, we have to add it. 
} 

//we could have loop never run by setting let test = false up top. But what if we need loop to run at least once?
//that can be solved w/ a do while loop. 


/*console.log('Do while test');
let test = false;
let count = 0;

do {
    if(count == 3) {
        test = false; 
        break;
    }
    console.log('The count is ' + count);
    count++
}while (test);  */