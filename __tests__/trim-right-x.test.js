import noop from 'lodash/noop';
import trimEnd from 'src/trim-right-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('trimEnd', function() {
  const allWhitespaceChars =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function() {
    it('trimEnd is a function', function() {
      expect.assertions(1);
      expect(typeof trimEnd).toBe('function');
    });
  });

  describe('trimEnd', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        trimEnd();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimEnd(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimEnd(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(4);
      let rest = ' \t\na';
      expect(trimEnd(`${rest} \t\n`)).toBe(rest, 'strips whitespace off the left side');
      expect(trimEnd('a')).toBe('a', 'noop when no whitespace');
      rest = `${allWhitespaceChars}a`;
      expect(trimEnd(rest + allWhitespaceChars)).toBe(rest, 'all expected whitespace chars are trimmed');
      const zeroWidth = '\u200b';
      expect(trimEnd(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trimEnd);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        trimEnd(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);

      const sym = Symbol('foo');
      expect(function() {
        trimEnd(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        trimEnd(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
