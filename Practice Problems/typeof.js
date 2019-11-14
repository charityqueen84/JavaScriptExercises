/* Write a JavaScript function which accepts an argument and returns the type. Go to the editor
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.*/

function dataType (x) {
    if (typeof(x) === 'number') {
        console.log('x is a number');
    }else if (typeof(x) === 'string') {
        console.log('x is a string');
    }else if (typeof(x) === 'boolean' ) {
        console.log('x is a boolean');
    }else if (typeof(x) === 'undefined') {
        console.log('x is not defined');
    }else if (typeof(x) === 'object') {
        console.log('x is an object');
    }else if (typeof(x) === 'function') {
        console.log('x is a function');
    }
}
dataType(function(){});