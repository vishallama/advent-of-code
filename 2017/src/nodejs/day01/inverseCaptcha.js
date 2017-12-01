// Day 1: Inverse Captcha
const captcha = require('./captcha.js');

const str = captcha.input.trim();
const inputArray = str.split("").map(value => parseInt(value, 10));

function inverseCaptcha(array, offset) {

  const arrayLength = array.length;

  return array.reduce((acc, curr, index, arr) => {
    if (arr[index] === arr[(index + offset) % arrayLength]) {
      return acc + curr;
    } else {
      return acc;
    }
  }, 0);
}

// Tests
console.log(inverseCaptcha(inputArray, 1));                             // 1251
console.log(inverseCaptcha(inputArray, inputArray.length / 2));         // 1244
