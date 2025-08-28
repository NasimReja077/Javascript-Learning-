/**
 * Conditional Statement - if-else, switch
 */


// 1. if-else condition
if (voterAge >= 18 ){
    console.log('Voter can vote for government');
}
else {
    console.log('Voter can vote for government');
}

// 2. switch case 
switch (new Date().getDay()) {
    case 0:
        text = "Today is Sunday";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    default:
        text = "Looking forward to the Weekend";
        break;
}