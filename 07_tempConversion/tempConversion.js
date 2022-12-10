// Convert Fahrenheit to Celsius
const convertToCelsius = function (num) {
  // subtract 32 and multiply by .5556
  return +((num - 32) * 0.5556).toFixed(1);
};

const convertToFahrenheit = function (num) {
  // Celsius to Fahrenheit formula
  // multiply num (fahrenheit) by 1.8 and add 32
  // convert to integer
  return +(num * 1.8 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
