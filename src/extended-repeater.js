const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  options = {
    repeatTimes: 0,
    additionRepeatTimes: 1,
  }
) {
  let newString = "";
  let base = String(str);
  let addition = String(options.addition);

  if (options.addition !== undefined) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      base +=
        addition +
        (options.additionSeparator &&
        options.additionRepeatTimes &&
        i < options.additionRepeatTimes - 1
          ? options.additionSeparator
          : "");
    }
  }
  if (options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      newString += base;
      if (i < options.repeatTimes - 1) {
        newString += options.separator ? options.separator : "+";
      }
    }
  } else {
    newString += base + (options.additionRepeatTimes > 1 ? "" : addition);
  }

  return newString;
}

module.exports = {
  repeater,
};
