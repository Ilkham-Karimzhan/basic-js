const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArray = str.split("");
  let result = "";
  let count = 1;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i + 1] && strArray[i + 1] == strArray[i]) count++;
    else {
      if (count == 1) {
        result += strArray[i];
        count = 1;
      } else {
        result += count + strArray[i];
        count = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
