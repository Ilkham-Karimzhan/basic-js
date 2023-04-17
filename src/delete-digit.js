const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringDigits = n.toString().split("");
  let maxDigit = 0;
  for (let i = 0; i < n.toString().length; i++) {
    delete stringDigits[i];
    if (maxDigit < parseInt(stringDigits.join(""))) {
      maxDigit = parseInt(stringDigits.join(""));
    }
    stringDigits = n.toString().split("");
  }
  return maxDigit;
}

module.exports = {
  deleteDigit,
};
