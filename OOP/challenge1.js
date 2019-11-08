let lamp = {
    type: 'desk',
    brightnessOfBulb: 60,
    turnedOn: true,
    manufacturer:{
        name: 'Big Electric Company',
        model: 'ABC1234',
        locations: ['USA', 'Germany', 'UK']
    },
    turnLampOnOrOff:function() { //changed this function so it changes off to on and on to off. 
        if(this.turnedOn == true) { //have to use keyword this if calling from within the object
            this.turnedOn = false;
        }else{
            this.turnedOn = true;

        }
    },
    lampReport: function() {
        console.log('This lamp is a ' + this.type + ' lamp');    
    },    //have to add a comma here
    lampStateReport: function() { //this is the new function we created to report if lamp is on or off 
        this.turnLampOnOrOff(); //this is called here
        if(this.turnedOn == true) {
            console.log('The lamp is turned on');
        }else{
            console.log('The lamp is turned off');
        }

    }
};

lamp.lampStateReport();//we have to send a message to the object to run the lampStateReport function

//we see 'the lamp is turned off' in the console b/c starting state is turned on (it's true), so turnLampOnOrOff changed that to
//false and then reported back that the lamp is turned off. 