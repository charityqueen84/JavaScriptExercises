function whatType(entry) {
    switch (typeof entry) {
        case 'string':
            return 'x is a string ';
            break;
        case 'number':
            return 'x is a number';
            break;
        case 'boolean':
            return 'x is a boolean';
            break;
        case 'undefined':
            return 'x is not defined';
            break;
        case 'object':
            return 'x is an object';
            break;
        case 'function':
            return 'x is a function'
            break;
        default: 
            return 'x is none of the typeof types';
            break;
      }

}
console.log(whatType(function(){}));