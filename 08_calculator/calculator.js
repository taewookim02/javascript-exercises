const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, cur) => {
    return acc * cur;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(2));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
