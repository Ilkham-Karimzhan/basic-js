const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let newArray = [];
  let skipNext = false;
  let notExist = false;

  for (let i = 0; i < arr.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue;
    }

    switch (arr[i]) {
      case "--double-next":
        if (i < arr.length - 1) {
          newArray.push(arr[i + 1], arr[i + 1]);
          skipNext = true;
          notExist = false;
        }
        break;
      case "--double-prev":
        if (i > 0 && !notExist) {
          newArray.push(newArray[newArray.length - 1]);
        }
        break;
      case "--discard-next":
        if (i < arr.length - 1) {
          skipNext = true;
          notExist = true;
        }
        break;
      case "--discard-prev":
        if (i > 0 && !notExist) {
          newArray.pop();
        }
        break;
      default:
        newArray.push(arr[i]);
    }
  }
  return newArray;
}

module.exports = {
  transform,
};
