function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(LeapYear(2023)); 

  