const convertToCelsius = function(Fah) {
  let celRound = (Fah - 32) * 5/9
  return Math.round (celRound * 10) / 10;
};

const convertToFahrenheit = function(Cel) {
  let fahRound = (Cel * 9/5) + 32;
  return Math.round (fahRound * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
