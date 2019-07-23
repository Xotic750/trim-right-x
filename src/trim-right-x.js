import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace from 'white-space-x';

const EMPTY_STRING = '';
const RegExpCtr = /none/.constructor;
const reRight2018 = new RegExpCtr(`[${whiteSpace}]+$`);
const {replace} = EMPTY_STRING;

/**
 * This method removes whitespace from the end of a string. (ES2019).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */
const trimEnd = function trimEnd(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, EMPTY_STRING);
};

export default trimEnd;
