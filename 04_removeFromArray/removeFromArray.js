const removeFromArray = function (arr, ...args) {
  // let result;
  // // go through args and loop over arr using filter
  // args.forEach((argsVal, j) => {
  //   result = arr.filter((arrVal) => arrVal !== argsVal);
  // });

  // go through args and loop over arr using filter and update using reduce O(n^2)
  // let result = args.reduce((acc, val) => {
  //   return acc.filter((arrVal) => arrVal !== val);
  // }, arr);
  // return result;

  // go through args and oop over arr using splice O(n)
  args.forEach((val) => {
    let index = arr.indexOf(val);

    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(val);
    }
  });
  return arr;
};
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
