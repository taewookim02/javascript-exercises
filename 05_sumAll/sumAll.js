const sumAll = function (num1, num2) {
  // Guard clause to check if num1 and num2 is a number
  if (
    typeof num1 !== "number" ||
    Number.isNaN(num1) ||
    typeof num2 !== "number" ||
    Number.isNaN(num2)
  ) {
    return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  // create a variable to add
  let total = 0;

  // if larger integer comes first
  const restingVariable = num2; // smaller
  // I want to swap num1 and num2

  if (num2 > num1) {
    // from num1 to num2, loop over and add every single number
    for (let i = 0; i <= num2; i++) {
      total += i;
    }
  }
  if (num1 > num2) {
    for (let i = 0; i <= num1; i++) {
      total += i;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
