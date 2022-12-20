const palindromes = function (str) {
  const splitList = str.split("");
  const reverseList = splitList.reverse();
  // remove non alphabetical values on both
  const resultStringToCompare = str
    .split("")
    .filter((alphabet) => alphabet.length === 1 && alphabet.match(/[a-z]/i))
    .map((char) => char.toLowerCase())
    .join("");
  const reversedStringToCompare = reverseList
    .filter((alphabet) => alphabet.length === 1 && alphabet.match(/[a-z]/i))
    .map((char) => char.toLowerCase())
    .join("");

  // if str === reversed,joined list ? true : false
  return resultStringToCompare === reversedStringToCompare;
};

// Do not edit below this line
module.exports = palindromes;
