//FIRST PART OF CHALLENGE BEFORE WE SKIP 4 AND 7: 

/*let sum = 0; //declare a sum variable outside of block. to keep a running total, we need to declare the variable outside of the for block.

for(let i = 1; i <= 10; i++) { //loop for counter 1 - 10
    let product = i * 5; //each time the block runs, any variables are created fresh and variables are deleted. We want that, so that with each iteration, we're getting a fresh product
        console.log('The product of ' + i + ' and 5 is ' + product);
        sum += product; //equivalent of sum = sum + product. Take whatever value is in sum at that moment, add product, and save back to sum.
    }
    console.log('The grand total sum is ' + sum); */

    //2ND PART OF CHALLENGE: Skip 4 and 7, so we do this. Put if block right at the beginning of the loop
let sum = 0; //declare a sum variable outside of block. to keep a running total, we need to declare the variable outside of the for block.
for(let i = 1; i <= 10; i++) { //loop for counter 1 - 10
    console.log('This is loop # ' + i);
    if ((i == 4) || (i == 7)) { //when one of these is true, skip and move on to next iteration
        continue; //to skip iterations 4 and 7
    }
    let product = i * 5; //each time the block runs, any variables are created fresh and variables are deleted. We want that, so that with each iteration, we're getting a fresh product
        console.log('The product of ' + i + ' times 5 is ' + product);
        sum += product; //equivalent of sum = sum + product. Take whatever value is in sum at that moment, add product, and save back to sum.
    // 0 = 0 + 5. sum is now 5. sum = 5 + 5 = 10. sum is now 10. sum = 10 + 5. sum is now 15. 
    }
    console.log('The grand total sum is ' + sum);





    


    
    

