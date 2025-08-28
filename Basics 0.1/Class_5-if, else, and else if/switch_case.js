let Day = 6;
let DayName;

switch (Day){
     case 1:
          DayName = 'My Day';
          break;
     case 2:
          DayName = 'Sunday';
          break;
     case 3:
          DayName = 'Work Day';
          break;
     case 4:
          DayName = 'Monday';
          break;
     case 5:
          DayName = 'Prise Day';
          break;
     case 6:
          DayName = 'Frei Day';
          break;
     default:
          dayName = 'Invalid day';
}
console.log(DayName);


/*
Using the JavaScript switch statement to get the day count based of a month
let year = 2016;
let month = 2;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29
*/