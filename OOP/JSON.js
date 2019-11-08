let lamp = {  //curly braces here aren't blocks - container to hold json object. 
    type: 'desk', //unless it's the last item in JSON object, you must complete declaration w/ a comma 
    //automatically, name of property, (in this case type), is recognized by JS as being a String. You
    //can surround it by quotes or not. could be "type": "desk",   These are known as key value pairs! 
    brightnessOfBulb: 60,
    turnedOn: true,  //this is a well formed JSON object called lamp, and you can call on its properties if needed by using 
    //dot notation (name of object.property you want to call up) - example on line 11 w/ console
    manufacturer:{ //putting the curly braces here means even though manufacturer, even though it's a property, is going to be an object in and of itself, with its own properties and behaviors. 
        name: 'Big Electric Company',
        model: 'ABC1234',
        locations: ['USA', 'Germany', 'UK']  //property is an array. an array can be the value of a property w/ in an object. No comma here b/c it's the last item. Instead, put comma outside curly brace
    }, // comma here indicates that's the end of the manufacturer property.  
    turnLampOnOrOff: function() {     //we can also add a behavior very close to the same way we built functions previously. Here, we'll just have it return a 
        console.log('The lamp will turn on or off'); //console.log b/c there's a topic we'll discuss in the next video (35). Also put what's on line 25 (lamp.turnLampOnOrOff())

    } //no comma here @ end of turnLampOnOrOff b/c we don't intend to add any more properties/behaviors to this object. 

};  //designate a property by naming the property, followed by a call in, and then a value assigned to it. Ex: property of type w/ value of String 'desk'  

console.log(lamp.type); //this returns desk, which is the value we assigned to type property
console.log(lamp.manufacturer.model); //to access model number from manufacturer property, use dot notation. mainobject.property.property (since manufa. is an object)
//this returns ABC1234
//a property could be in itself an object. Say we want to show manufacturer of lamp, we could add manufac. property

lamp.turnLampOnOrOff(); 
console.log(typeof lamp.brightnessOfBulb);  //we could do this to determine what type our property is
//returns "number", if I used type it would have returned a string, turnedOn, returned a boolean 