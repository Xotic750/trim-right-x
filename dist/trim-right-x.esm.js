import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace, { string2016 } from 'white-space-x';
var EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reRight2016 = new RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new RegExpCtr("[".concat(whiteSpace, "]+$"));
var replace = EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

export function trimRight2016(string) {
  return replace.call(requireCoercibleToString(string), reRight2016, EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

export default function trimRight2018(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, EMPTY_STRING);
}

//# sourceMappingURL=trim-right-x.esm.js.map