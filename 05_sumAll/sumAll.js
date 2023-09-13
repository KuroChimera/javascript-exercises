const sumAll = function(num1, numb2) {
  if (isNaN(num1) || isNaN(numb2)){
    return "ERROR";
  }
  if (num1 < 0 || numb2 < 0) {
    return "ERROR"
  }
  let min = Math.min(num1, numb2);
  let max = Math.max(num1, numb2);
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
