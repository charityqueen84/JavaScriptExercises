let grade = 99;
switch(true) { //using true 9jstead of grade here since we'll be using comparison operators. 
    case grade >= 90:
        console.log('The grade is A');
    break;
    case (grade >=80) && (grade <=89):
        console.log('The grade is B');
    break;
    case (grade >= 70) && (grade <= 79):
        console.log('The grade is C');
    break;
    case (grade >= 60) && (grade <= 69):
        console.log('The grade is D');
    break;
    case grade < 60:
        console.log('The grade is F');
    break;
}