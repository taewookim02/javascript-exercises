// const fibonacci = function (num) {
//   if (num < 0) return "OOPS";
//   let a = 0;
//   let b = 1;
//   let c = +num;

//   for (let i = 2; i <= num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c;
// };

// const fibonacci = function (n) {
//   if (n < 0) return "OOPS";
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  let prev = 1;
  let curr = 1;
  let next;

  // 3
  for (let i = 2; i < n; i++) {
    next = prev + curr; // 1 + 2 = 3
    prev = curr; // 2
    curr = next; // 3
  }
  return curr;
};

// fibonacci(4) // returns the 4th number of the series: 3 (1, 1, 2, 3, 5, 8, )
// fibonacci(6) // returns 8

// Do not edit below this line
module.exports = fibonacci;
