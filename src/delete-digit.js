const { NotImplementedError } = require('../extensions/index.js');

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
let arrNumb = n.toString().split('');
let result = arrNumb.map((item, idx) => {
  return (arrNumb.filter((elem, ind) => {
    return ind !== idx;
  }).join(""))
})
return Math.max(...result);
}
console.log(deleteDigit(12345));
module.exports = {
  deleteDigit
};
