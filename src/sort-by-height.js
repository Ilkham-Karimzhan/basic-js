const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr.slice();
  const indexes = array.reduce((acc, val, i) => {
    if (val === -1) {
      acc.push(i);
    }
    return acc;
  }, []);
  const filteredArray = array.filter((val) => val !== -1);
  const sortedArray = filteredArray.sort((a, b) => a - b);
  indexes.forEach((index) => {
    sortedArray.splice(index, 0, -1);
  });
  return sortedArray;
}

module.exports = {
  sortByHeight,
};
