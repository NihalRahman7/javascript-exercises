const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr = []) {
  const sum = arr.reduce((total, nextNum) => total + nextNum, 0);
  return sum;
};

const multiply = function(arr = []) {
  const product = arr.reduce((total, nextNum) => total * nextNum);
  return product;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
  if (num == 0 || num == 1){
    return 1;
  }

  for (let i = 0; i < num; i++){    
    return num * factorial(num - 1);
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
