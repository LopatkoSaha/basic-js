const { NotImplementedError } = require('../extensions/index.js');

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
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const result = [];
  let skipNext = false;
  arr.forEach((item, idx) => {
    if (skipNext) {
      skipNext = false;
      return;
    }
    switch (item) {
      case "--discard-prev":
        if (!result.length) {
          return;
        }
        return result.splice(idx - 1, 1);
      case "--discard-next":
        if (idx === arr.length - 1) {
          return;
        }
        return skipNext = true;
      case "--double-prev":
        if (!result.length) {
          return;
        }
        return result.push(result.at(-1));
      case "--double-next":
        if (idx === arr.length - 1) {
          return;
        }
        return result.push(arr[idx + 1]);
      default: result.push(item);
    }
    // if (item === "--discard-next") {
    //   result.splice(ind, 2)
    // }
    // if (item ==="--discard-prev" && ind === 0 || isNaN(item) && ind === 0) {
    //   result.splice(ind, 1)
    // }
    // if (isNaN(item) && ind === 0) {
    //   result.splice(ind, 1)
    // }
    // if (item ==="--discard-prev") {
    //   result.splice(ind - 1, 2)
    // }
    // if (item === "--double-next") {
    //   result.splice(ind, 1, ind + 1)
    // }
    // if (item === "--double-prev") {
    //   result.splice(ind, 1, ind - 1)
    // }
  });
  return result
}

// console.log(transform([ '--discard-prev', 1, 2, 3]));

module.exports = {
  transform
};
// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next дублирует следующий элемент массива в преобразованном массиве.
// --double-prev дублирует предыдущий элемент массива в преобразованном массиве