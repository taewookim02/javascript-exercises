const repeatString = function (str, num) {
  let result = "";
  if (str === "") return "";
  if (num < 0) return "ERROR";
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
};
repeatString("hey", 10);
// Do not edit below this line
module.exports = repeatString;
