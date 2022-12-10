const removeFromArray = function (arr, ...args) {
  // let result;
  // // go through args and loop over arr using filter
  // args.forEach((argsVal, j) => {
  //   result = arr.filter((arrVal) => arrVal !== argsVal);
  // });

  // go through args and loop over arr using filter and update using reduce
  let result = args.reduce((acc, val) => {
    return acc.filter((arrVal) => arrVal !== val);
  }, arr);
  return result;
};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
// Do not edit below this line
module.exports = removeFromArray;
