const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let counter = {};
  for (let name of names) {
    if (!result.includes(name)) {
      result.push(name);
      counter[name] = 1;
    } else {
      let newName = "";
      if (counter[name]) {
        newName = `${name}(${counter[name]})`;
      } else {
        newName = `${name}(1)`;
      }
      while (result.includes(newName)) {
        counter[name]++;
        newName = `${name}(${counter[name]})`;
      }
      result.push(newName);
      counter[name]++;
    }
  }
  return result;
}

module.exports = {
  renameFiles,
};
