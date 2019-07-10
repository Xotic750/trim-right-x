import requireCoercibleToString from 'require-coercible-to-string-x';
import whiteSpace, {string2016} from 'white-space-x';

const RegExpCtr = /none/.constructor;
const reRight2016 = new RegExpCtr(`[${string2016}]+$`);
const reRight2018 = new RegExpCtr(`[${whiteSpace}]+$`);
const {replace} = '';

/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} string - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */
export function trimRight2016(string) {
  return replace.call(requireCoercibleToString(string), reRight2016, '');
}

/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} string - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */
export default function trimRight2018(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, '');
}
