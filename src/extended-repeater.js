const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, {
  repeatTimes = 1,
  separator = "+",
  addition = "",
  additionRepeatTimes = 1,
  additionSeparator = "|",
}) {
  const additionSubstring = new Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator);
  return new Array(repeatTimes).fill(`${str}${additionSubstring}`).join(separator);
}

module.exports = {
  repeater
};
// repeatTimesустанавливает количество numberповторений str;
// separatorявляется stringразделяющим повторением str;
// additionявляется дополнительным string, который будет добавляться к каждому повторению str;
// additionRepeatTimesустанавливает количество numberповторений addition;
// additionSeparatorявляется stringразделяющим повторением addition.