import noop from 'lodash/noop';
import trimRight, {trimRight2016} from 'src/trim-right-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolIt = hasSymbol ? it : xit;

describe('trimRight', function() {
  const allWhitespaceChars2016 =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  const allWhitespaceChars2018 =
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function() {
    it('trimRight is a function', function() {
      expect.assertions(1);
      expect(typeof trimRight).toBe('function');
    });

    it('trimRight2016 is a function', function() {
      expect.assertions(1);
      expect(typeof trimRight2016).toBe('function');
    });

    it('trimRight should not be trimRight2016', function() {
      expect.assertions(1);
      expect(trimRight).not.toBe(trimRight2016);
    });
  });

  describe('trimRight2016', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        trimRight2016();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimRight2016(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimRight2016(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(4);
      let rest = ' \t\na';
      expect(trimRight2016(`${rest} \t\n`)).toBe(rest, 'strips whitespace off the left side');
      expect(trimRight2016('a')).toBe('a', 'noop when no whitespace');
      rest = `${allWhitespaceChars2016}a`;
      expect(trimRight2016(rest + allWhitespaceChars2016)).toBe(rest, 'all expected whitespace chars are trimmed');
      const zeroWidth = '\u200b';
      expect(trimRight(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trimRight2016);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        trimRight2016(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);

      const sym = Symbol('foo');
      expect(function() {
        trimRight2016(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        trimRight2016(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });

  describe('trimRight', function() {
    it('should throw when target is null or undefined', function() {
      expect.assertions(3);
      expect(function() {
        trimRight();
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimRight(void 0);
      }).toThrowErrorMatchingSnapshot();

      expect(function() {
        trimRight(null);
      }).toThrowErrorMatchingSnapshot();
    });

    it('basic tests', function() {
      expect.assertions(4);
      let rest = ' \t\na';
      expect(trimRight(`${rest} \t\n`)).toBe(rest, 'strips whitespace off the left side');
      expect(trimRight('a')).toBe('a', 'noop when no whitespace');
      rest = `${allWhitespaceChars2018}a`;
      expect(trimRight(rest + allWhitespaceChars2018)).toBe(rest, 'all expected whitespace chars are trimmed');
      const zeroWidth = '\u200b';
      expect(trimRight(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function() {
      expect.assertions(1);
      const values = [true, 'abc', 1, noop, [], /r/];

      const expected = values.map(String);
      const actual = values.map(trimRight);
      expect(actual).toStrictEqual(expected);
    });

    it('should throw for Object.create(null)', function() {
      expect.assertions(1);
      expect(function() {
        trimRight(Object.create(null));
      }).toThrowErrorMatchingSnapshot();
    });

    ifSymbolIt('should throw for Symbol', function() {
      expect.assertions(2);

      const sym = Symbol('foo');
      expect(function() {
        trimRight(sym);
      }).toThrowErrorMatchingSnapshot();

      const symObj = Object(sym);
      expect(function() {
        trimRight(Object(symObj));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});
