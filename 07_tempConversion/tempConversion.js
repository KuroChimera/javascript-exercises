const convertToCelsius = function(Fah) {
  return (Fah - 32) * 5/9;
};

const convertToFahrenheit = function(Cel) {
  return (Cel * 9/5) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
