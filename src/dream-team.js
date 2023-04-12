const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(members)) {
    return false;
  }
  const result = members.reduce((acc, item) => {
    if (typeof item !== "string" || item.length === 0) {
      return acc;
    }
    return acc += item.trim()[0].toUpperCase();
  }, '');
  return result.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
}

module.exports = {
  createDreamTeam
};
