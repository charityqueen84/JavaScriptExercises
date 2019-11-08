//Create a new array
let shoppingList = ['eggs', 'milk', 'bread', 'cereal', 'soda']; //because indexes begin at 0, it's always one less than the length

for(let i = 0; i < 5; i++) { //it'll loop through index position 1, 2, 3, 4
    console.log(shoppingList[i]);  //to retrieve value from something in array
                                    //how do you increment that index number for each loop? Plugging i (the counter for the for loop) in where index would nomrally go (above). So that way as it goes through, it'll be 0, 1, 2, 3, 4.
}
console.log('Second array');
//what if something else gets added to our list and try to print w/ same code as above? 
let shoppingList2 = ['eggs', 'milk', 'bread', 'cereal', 'soda', 'apples'];
for(let i = 0; i < shoppingList2.length; i++) { 
    console.log(shoppingList2[i]);
    //the loop does not recognize the new element because it is hardcoded only to run to index # 4 (i < 5).
    //use length property instead of 5 and it works. When you're using a for loop to go through an array, 
    //never use a hard coded number for the condition. Always use the name of the array.length so you 
    //always include all the elements. 
    //This is not the most efficient. For each loop is. 
}
console.log('-----------------------------------------------------------------------------');
console.log('For each structure - instead of having to do for loop');
console.log('Third Array: ');
console.log('-----------------------------------------------------------------------------');
//for each structure is both a function and a looping structure. Think of it as a function whose job it is to
//loop through an array. 
//start w/ name of Array.forEach() - for each function takes one parameter, 
//which is also a function, an anonymous function (one without a name). Inside parentheses function() {}
let shoppingList3 = ['eggs', 'milk', 'bread', 'cereal', 'soda', 'apples'];

shoppingList3.forEach(function(items, index) {   //items is parameter we're passing to callback function. 
    console.log(index + '. ' + items);    //now we use "items" when we need to access elements

}); //closing curly brace, closing parentheses, semi colon   
//when you pass a function to another function, function you pass is called a callback function. Looping code 
//runs automatically for as many elements as there are in the array - don't need to set a counter. How do we list
//the items in our array in a for each structure? We have to pass the callback function a parameter. You can
//call that param whatever you want. We'll call it items here. It goes in parentheses after function()
//now we use items when we need to access the elements. 

//Too add an index number to item I'm accessing, would need to add a second parameter to callback function and 
//change console.log. So we added another parameter of name index (again, whatever you want to call it)