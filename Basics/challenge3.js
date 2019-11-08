let temp = -1;
if (temp >=90) {
    console.log('The temperature is HOT');
}else if((temp >=85) && (temp >= 80)) {
    console.log('The temperature is not so hot');
}else if((temp >=75) && (temp <=80)){
    console.log('The temperature is moderate');
}else if((temp <=65) && (temp >=60)) {
    console.log('The temperature is cool');
}else if(temp <=40) {
    console.log('The temperature is cold');
}else{
    console.log('This is not a valid temperature');
}
