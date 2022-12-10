const leapYears = function (year) {
  // if year is divisble by 100, its not a leap year unless its divisble by 400
  // for cases like 1900 which passes 4 but it has to return false
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  // if year is divisble by 4, its a leap year
  // if year is divisble by 400, its a leap year
  if (year % 4 === 0 || year % 400 === 0) {
    return true;
  }

  // For all the other cases
  return false;

  // return boolean
};

// Do not edit below this line
module.exports = leapYears;
