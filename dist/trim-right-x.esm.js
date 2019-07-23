import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace from 'white-space-x';
var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reRight2018 = new RegExpCtr("[".concat(whiteSpace, "]+$"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

var trimEnd = function trimEnd(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, EMPTY_STRING);
};

export default trimEnd;

//# sourceMappingURL=trim-right-x.esm.js.map