const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) return false;
  let sortedMembers = Array.from(members).sort();
  let teamArray = [];
  let name = "";

  for (let name of sortedMembers) {
    if (typeof name == "string") teamArray.push(name.trim()[0].toUpperCase());
  }
  for (let char of teamArray.sort()) {
    name += char;
  }
  return name;
}

module.exports = {
  createDreamTeam,
};
