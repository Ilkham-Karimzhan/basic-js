const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(Straight) {
    this.reverseMode = !Straight;
  }

  encrypt(message, module) {
    if (!message || !module) throw new Error("Incorrect arguments!");
    if (!this.reverseMode) this.reverseMode = false;

    let text = message.toUpperCase();
    let key = module.toUpperCase();

    let encryptedText = "";

    for (let i = 0, j = 0; i < text.length; i++) {
      const char = text.charAt(i);

      if (char >= "A" && char <= "Z") {
        const keyChar = key.charAt(j % key.length);
        const shift = keyChar.charCodeAt(0) - "A".charCodeAt(0);
        const encryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) +
            "A".charCodeAt(0)
        );
        encryptedText += encryptedChar;
        j++;
      } else {
        encryptedText += char;
      }
    }

    return this.reverseMode
      ? encryptedText
      : encryptedText.split("").reverse().join("");
  }

  decrypt(encryptedMessage, module) {
    if (!encryptedMessage || !module) throw new Error("Incorrect arguments!");
    if (!this.reverseMode) this.reverseMode = false;

    let encryptedText = encryptedMessage.toUpperCase();
    let key = module.toUpperCase();

    let decryptedText = "";

    for (let i = 0, j = 0; i < encryptedText.length; i++) {
      const char = encryptedText.charAt(i);

      if (char >= "A" && char <= "Z") {
        const keyChar = key.charAt(j % key.length);
        const shift = keyChar.charCodeAt(0) - "A".charCodeAt(0);
        const decryptedChar = String.fromCharCode(
          ((char.charCodeAt(0) - "A".charCodeAt(0) - shift + 26) % 26) +
            "A".charCodeAt(0)
        );
        decryptedText += decryptedChar;
        j++;
      } else {
        decryptedText += char;
      }
    }

    return this.reverseMode
      ? decryptedText
      : decryptedText.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
