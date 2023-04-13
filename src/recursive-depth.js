const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, [1, 3], 3, [4, [1, 2]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    return 1 + Math.max(...arr.map(element => {
      if (Array.isArray(element)) {
        if (element.length === 0) {
          return 1;
        }
        return this.calculateDepth(element);
      }else{
        return 0;
      }
    }));
  }
}
module.exports = {
  DepthCalculator
};
