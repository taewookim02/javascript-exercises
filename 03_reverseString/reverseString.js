const reverseString = function (str) {
  if (str === "") return "";
  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
