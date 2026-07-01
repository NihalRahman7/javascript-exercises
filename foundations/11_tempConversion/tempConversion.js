const convertToCelsius = function(num) {
  const convertedNum = (num - 32) * (5/9);
  const roundedNum = Math.round(convertedNum * 10) / 10;
  return roundedNum;
};

const convertToFahrenheit = function(num) {
  const convertedNum = (num * (9/5) + 32);
  const roundedNum = Math.round(convertedNum * 10) / 10;
  return roundedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
