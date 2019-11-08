//same file as JSON.js, but say we want to have a function that tells us what tpye of lamp we have. Add a comma to line14, and then the function

let lamp = {
    type: 'desk',
    brightnessOfBulb: 60,
    turnedOn: true,
    manufacturer:{
        name: 'Big Electric Company',
        model: 'ABC1234',
        locations: ['USA', 'Germany', 'UK']
    },
    turnLampOnOrOff: function() {
        console.log('The lamp will turn on or off');
    },
    lampReport:function() {
        console.log('This lamp is a ' + this.type + ' lamp'); //simple concatenation telling what kind of lamp it is, then on line 25   
    }
};
console.log(lamp.type);
console.log(lamp.manufacturer.model);

lamp.turnLampOnOrOff(); 
console.log(typeof lamp.brightnessOfBulb); 
lamp.type = 'overhead';     //calling the object (lamp), calling the property 9(type)
lamp.lampReport();  //calling our new behavior called lampReport
//we got a type is not defined error. But we see it defined in the object. Type: desk. 
//When you call a property or behavior within the same object in JS, you must preference the call w/ the keyword this followed by a dot.
//so on line 16, instead of just type, we have to do this.type. Now it works!

//what if we want to change value of lamp type to overhead? Before we make call to lamp report (lamp.lampReport()), (line 24)

//lines 24 and 25 (lamp.type = overhead and lamp.lampReport()) are called messages. In the first case, we are sending a message
//to the lamp object and telling it to change the value of the type property to overhead. In the second case (line 25), we're 
//sending a message to the lamp object and telling it to run the lampReport function. 
//terminology, using the word message could help clarify concepts for more advanced JS.

