const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (dir = true) {
    this.dir = dir; 
  }
  getTransformedKey (message = '', key = '') {
    if (key.length >= message.length){
      return key.toUpperCase();
    }
    let source = key;
    while (source.length < message.length) {
      source += key;
    }
    let result = "";
    let keyOffset = 0;
    const words = message.split(" ");
    words.forEach((word) => {
      result += source.slice(keyOffset, keyOffset + word.length) + " ";
      keyOffset += word.length;
    })
    return result.toUpperCase();
  }
  cryptSymbol (symb = '', key = '', isCrypt) {
    const keyCode = key.toUpperCase().charCodeAt();
    const symbCode = symb.toUpperCase().charCodeAt();
    if (symbCode < 65 || symbCode > 90) {
      return symb;
    }
    if(isCrypt) {
      return String.fromCharCode((keyCode + symbCode - 130)%26 + 65);
    }
    let diff = (symbCode - keyCode) < 0 ? (symbCode - keyCode) + 26 : (symbCode - keyCode);
    return String.fromCharCode(diff + 65);
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const transformedKey = this.getTransformedKey(message, key);
    const result = message.split('').map((symb, idx) => {
      return this.cryptSymbol(symb, transformedKey[idx], true);
    }).join('');
    return this.dir ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    const transformedKey = this.getTransformedKey(message, key);
    const result = message.split('').map((symb, idx) => {
      return this.cryptSymbol(symb, transformedKey[idx], false);
    }).join('');
    return this.dir ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
