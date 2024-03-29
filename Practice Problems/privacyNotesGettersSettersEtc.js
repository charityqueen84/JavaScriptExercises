/*Accessing and updating properties is fundamental in working with objects. However, there are cases 
in which we don’t want other code simply accessing and updating an object’s properties. When discussing 
privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.
Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, 
JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One 
common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. 
Here’s an example of using _ to prepend a property. */

const bankAccount = {
  _amount: 1000
}
//In the example above, the _amount is not intended to be directly manipulated.
//Even so, it is still possible to reassign _amount:

bankAccount._amount = 1000000;
//In later exercises, we’ll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values. For now, let’s see what happens if we can change properties that don’t have setters or getters.




const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  /*1.Below the robot object, reassign the _energyLevel property to 'high'.
  2.Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.
What will happen now that _energyLevel isn’t a number?

Call .recharge() on robot to find out.

Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. 
No need to worry about what this means for now, but it’s important to understand that you can cause 
unwanted side-effects when mutating objects and their properties. */
const robot = {
    _energyLevel: 'high',
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  console.log(robot.recharge());



/*Getters are methods that get and return the internal properties of an object. But they can do 
more than just retrieve the value of a property! Let’s take a look at a getter method: */

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'
//Notice that in the getter method above:

/*We use the get keyword followed by a function.
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure 
    they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using this. In fullName, we’re accessing 
both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called 
with a set of parentheses. Syntactically, it looks like we’re accessing a property.
Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand. */
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  
};
/*Another thing to keep in mind when using getter (and setter) methods is that properties cannot share 
the same name as the getter/setter function. If we do so, then calling the method will result in an 
infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

Great, let’s go getter!
1.In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

2.Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. 
If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of 
this._energyLevel.
Make sure you return the string and not logging it to the console.

3.If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a 
default return statement for when such a scenario arises.
Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

4.Log the result of calling the getter method energyLevel on robot to the console.
Notice that the method will return a formatted response rather than just accessing a property!*/
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel;
      }else{
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  console.log(robot.energyLevel);

  /* Along with getter methods, we can also create setter methods which reassign values of existing properties 
  within an object. Let’s see an example of a setter method: */

const person = {
  _age: 37,
  setAge(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
//Notice that in the example above:

/*We can perform a check for what value is being assigned to this._age.
When we use the setter method, only values that are numbers will reassign this._age
There are different outputs depending on what values are used to reassign this._age.
Then to use the setter method: */

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
//Setter methods like age do not need to be called with a set of parentheses. Syntactically, 
//it looks like we’re reassigning the value of a property.

//Like getter methods, there are similar advantages to using setter methods that include checking 
//input, performing actions on properties, and displaying a clear intention for how the object is 
//supposed to be used. Nonetheless, even with a setter method, it is still possible to directly 
//reassign properties. For example, in the example above, we can still set ._age directly: */

person._age = 'forty-five'
console.log(person._age); // Prints forty-five
Instructions

/*1.Currently, in robot there is a getter method for numOfSensors but no setter method! What if we 
need to add or remove some sensors? Let’s fix that problem. */
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  getnumOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
};

/*Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. 
Leave the function body empty for now.

2.There are a couple of things we should do in the setter method:
Add a check to see if num is a number using the typeof operator.
num should also be greater than or equal to 0.
If both conditions are met, reassign this._numOfSensors to num.
3.Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console. */
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }else{
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
};

/*4.Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

5.To check that the setter method worked, console.log() robot.numOfSensors.*/
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      }else{
        console.log('Pass in a number that is greater than or equal to 0');
      }
      robot.numOfSensors = 100;
      console.log(robot.numOfSensors);
    },
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    
  };

  /*
  So far we’ve been creating objects individually, but there are times where we want to create many 
  instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures 
  multiple copies of an item quickly and on a massive scale. A factory function is a function that returns 
  an object and can be reused to make multiple object instances. Factory functions can also have parameters 
  allowing us to customize the object that gets returned.
Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types 
of monsters and we could go about making each monster individually but we can also use a factory function to
 make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a 
 factory function that has parameters: */

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
//In the monsterFactory function above, it has four parameters and returns an object that has the properties: 
//name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, 
//we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
/*Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. 
With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. 
Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!*/


/*1.Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please!

Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an 
object. In the object, add a key of model with the value of the model parameter. Add another property that has a key 
of mobile with a value of the mobile parameter.
Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

2.Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling 
robotFactory with the first argument of 'P-500' and the second argument of true.

3.Let’s now check what tinCan can do! Call .beep() on tinCan.

You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! 
Play around with tinCan to check the other properties!
  */

  const robotFactory = (model, mobile) => { //factory function
    return { //function returns an object
      model: model, //key, value
      mobile: mobile, //key, value
      beep() {  //method 
        console.log('Beep Boop')
      }
    }
    
  };
  const tinCan = robotFactory('P-500', true); //use factory function by declaring a variable and assigning it the value of calling robotFactory with those arguments.
  tinCan.beep(); //called beep on tinCan. 'Beep Boop' prints to console

  /* 
  ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

In the previous exercise, we created a factory function that helped us create objects. We had to assign 
each property a key and value even though the key name was the same as the parameter name we assigned to it. 
To remind ourselves, here’s a truncated version of the factory function: */

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
/*Imagine if we had to include more properties, that process would quickly become tedious! 
But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. 
The example below works exactly like the example above: */

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
//Notice that we don’t have to repeat ourselves for property assignments!

/*1.
Use the property value shorthand and refactor the factory function in main.js
  */
 //Before:
 function robotFactory(model, mobile){
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  //Refactored w/ shorthand:
  const robotFactory = (model, mobile) => { //changed to const instead of function, = and => added
    return {
      model, //instead of model: model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  };
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  // We often want to extract key-value pairs from objects and save them as variables. Take for example the following object:

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
//If we wanted to extract the residence property as a variable, we could using the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
//However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
/*Look back at the vampire object’s properties in the first code example. Then, in the example above, we declare 
a new variable residence that extracts the value of the residence property of vampire. When we log the value of 
residence to the console, 'Transylvania' is printed.
We can even use destructured assignment to grab nested properties of an object: */

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'




const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  /*
1.Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.
Syntax: const { propertyName } = obj;
const { functionality } = robot;

2. Since functionality is referencing robot.functionality we can call the methods available to robot.functionality 
simply through functionality. 
Take advantage of this shortcut and call the .beep() method on functionality.*/
/*You can think of functionality as the object that was pulled out of robot.functionality. To call .beep(), use 
dot notation with the name of the method and a set of parentheses:
functionality.beep(); */

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const { functionality } = robot;
  functionality.beep()

/* In the previous exercises we’ve been creating instances of objects that have their own methods. But, 
we can also take advantage of built-in methods for Objects!
For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! 
Practice your documentation reading skills and check out: MDN’s object instance documentation.
There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() 
just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.
Let’s get acquainted with some of these methods and their documentation.*/

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
/* In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, 
and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call.
Find out what we have to include by reading MDN’s Object.keys() documentation.
2.Object.entries() will also return an array, but the array will contain more arrays that have both the key and value 
of the properties in an object.

Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

To find how to use Object.entries(), read the documentation at MDN.

3.Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() 
sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN.

Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the 
properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing 
the robot object!*/


// What is missing in the following method call?
const robotKeys = Object.keys();
console.log(robotKeys);

// Declare robotEntries below this line:


console.log(robotEntries);

// Declare newRobot below this line:


console.log(newRobot);

//--------------------- Completed:-------------------
  
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});
console.log(newRobot);

/* Congratulations on finishing Advanced Objects!

Let’s review the concepts covered in this lesson:

The object that a method belongs to is called the calling object.
The this keyword refers the calling object and can be used to access properties of the calling object.
Methods do not automatically have access to other internal properties of the calling object.
The value of this depends on where the this is being accessed from.
We cannot use arrow functions as methods if we want to access other internal properties.
JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers 
about the intent of the code.
The usage of an underscore before a property name means that the original developer did not intend for that 
property to be directly changed.
Setters and getter methods allow for more detailed ways of accessing and assigning properties.
Factory functions allow us to create object instances quickly and repeatedly.
There are different ways to use object destructuring: one way is the property value shorthand and another is 
destructured assignment.
As with any concept, it is a good skill to learn how to use the documentation with objects!
You’re ready to start leveraging more elegant code for creating and accessing objects in your code!

Instructions
If you want to challenge yourself:

Find the value of this in a function inside of a method.
Learn the outcome of using a property that has the exact same name as a setter/getter method.
Create a new factory function that can create object instances of your choice.
Read documentation on other destructuring techniques and apply it to your code.
Try out other built-in object methods and learn what they do.
*/