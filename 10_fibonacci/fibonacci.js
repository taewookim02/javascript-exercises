const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  let a = 0;
  let b = 1;
  let c = +num;

  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};
// fibonacci(4) // returns the 4th number of the series: 3 (1, 1, 2, 3, 5, 8, )
// fibonacci(6) // returns 8

// Do not edit below this line
module.exports = fibonacci;
