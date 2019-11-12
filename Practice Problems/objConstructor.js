/*Create a constructor function, named Car, which defines an object with the following methods:
• getSpeed() – returns the current speed of the car
• setSpeed(speed) – sets the current speed of the car. If the value of the ‘speed’ parameter is greater than or equal to 0,
set the speed of the car.
• stop() – sets the current speed of the car to 0
Example:
var car = new Car();
console.log(car.getSpeed());  // displays 0
car.setSpeed(10);
console.log(car.getSpeed()); // displays 10
car.stop();
console.log(car.getSpeed()); // displays 0 */
/* Getters can return the value of internal properties and setters can safely reassign property values.*/
//setter methods reassign values of existing properties within an object.

class Car {
    constructor(speed) {
        this._speed = speed;
    }
    getSpeed() {
        return this._speed;

    }
    setSpeed(newSpeed) {
        if (newSpeed >= 0) {
            this._speed = newSpeed;
        }
    }
    stop() {
        this._speed -= this._speed;
    }
}

var car = new Car(0);
console.log(car.getSpeed());
car.setSpeed(10);
console.log(car.getSpeed());
car.stop();
console.log(car.getSpeed());
car.setSpeed(20);
console.log(car.getSpeed());
car.stop();
console.log(car.getSpeed());






   

