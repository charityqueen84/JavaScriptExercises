/*for () //3 arguments in parentheses. 
1. Declaration of variable to keep track of how many times the loop has run. Variable can be called whatever, 
but tradition uses i (stands for iterator).
2. Specifies when we want the loop to run to. (want it to run 5 times. If counter set to 0, it will run 0, 1, 2, 3, 4. This one 
will run 1, 2, 3, 4, 5 since it starts at 1). This one is run until it is less than or equal to 5. 
3. Increment operator (i++ means so the count of the variable increases by one with each loop).
 */

for(let i = 1; i <= 5; i++) {
    console.log('This is loop # ' + i);//code you want to repeat 
}
//we can also have the loop run backwards.
console.log('Run it backwards!');
for(let i = 5; i >= 1; i--) {
    console.log('This is loop # ' + i);
}

//place one block inside of another block:

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j<=3; j++) {  //inner loop that runs faster than the outer loop. You don't have to use a different variable, but for clarity, sometimes it's easier to. 
        console.log('The inner loop has run ' + j + ' times.');
    } //end of inner for loop
    console.log('The outer loop has run ' + i + ' times.'); //come below closing brace for inner loop and do a console log for outer loop
} 
/*once inner loop has run 1, 2, 3 times, then after it completes 3 iterations, then outer loop completes first iteration.
Then the inner loop starts running 1, 2, 3, then outer loop completes its next iteration, etc. Think of seconds, minutes, hours.
3 levels of a loop and the very inner level is seconds, and every time that gets to 60, then the minutes loop will increment to 1, 
and then when that minutes loop increments to 60, the hours will increment by one.
*/
//2 keywords associated w/ loops: continue and break. 

for(let i = 0; i < 5; i++){
    if (i == 3) { //this means that on loop number 3, the console.log will be skipped and loop #4 will start.
        continue; //tells loop to skip over any additional statements from that point on and start the next count(iteration) of the loop. 
    }
    console.log('This is loop # ' + i);  //and it skips loop 3 on the console log. 
}
//break keyword: break means loop ends all together and normal program flow continues
console.log('use the break keyword to stop loop after 3');
for(let i = 0; i < 5; i++){
    if (i == 3) { 
        break; //loop ends
    }
    console.log('This is loop # ' + i);  
}

//if you set a variable inside a block, whether that variable is a loop or a decision, that variable will last
//only as long as the block does. Once block completes its job, variable deleted from memory until next time block is called. 
//variable created and deleted w/ each iteration of a loop. 

for(let i = 0; i < 5; i++) { 
    let test = 0; //test declared to be zero
    test++; //incremented to 1, and then console.log showed test.
    console.log(test);
} //as soon as it hit close of block, test was completely wiped out and when block started again, test was re-declared
//to be zero, test++, and then the console showed test. Never got past one Process repeated each time. 