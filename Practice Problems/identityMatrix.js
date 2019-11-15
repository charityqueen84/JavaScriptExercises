function idMatrix(x) {
    var i;
    var j;
    for (i = 1; i < x; i++) {
        for (j = 1; j < x; j++) {
            if (i === j) {
                console.log('1');
            }
                console.log('0');
        }
        console.log('-------');
    }
}
console.log(idMatrix(4));