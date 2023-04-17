const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let nByChars = n
    .toString()
    .split("")
    .map((item) => parseInt(item));
  for (let char of nByChars) {
    sum += char;
  }
  while (sum > 9) {
    let arr = sum
      .toString()
      .split("")
      .map((item) => parseInt(item));
    let indexer = 0;
    for (let char of arr) {
      indexer += char;
    }
    sum = indexer;
  }
  return sum;
}

module.exports = {
  getSumOfDigits,
};
