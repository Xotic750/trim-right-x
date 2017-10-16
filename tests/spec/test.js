'use strict';

var lib;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var trimRight = lib.trimRight;
var trimRight2016 = lib.trimRight2016;
var trimRight2018 = lib.trimRight2018;

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('trimRight', function () {
  var allWhitespaceChars2016 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var allWhitespaceChars2018 = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  describe('basic', function () {
    it('trimRight is a function', function () {
      expect(typeof trimRight).toBe('function');
    });

    it('trimRight is a function', function () {
      expect(typeof trimRight2016).toBe('function');
    });

    it('trimRight is a function', function () {
      expect(typeof trimRight2018).toBe('function');
    });

    it('trimRight should be trimRight2018', function () {
      expect(trimRight).toBe(trimRight2018);
    });

    it('trimRight should not be trimRight2016', function () {
      expect(trimRight).not.toBe(trimRight2016);
    });
  });

  describe('trimRight2016', function () {
    it('should throw when target is null or undefined', function () {
      expect(function () {
        trimRight2016();
      }).toThrow();

      expect(function () {
        trimRight2016(void 0);
      }).toThrow();

      expect(function () {
        trimRight2016(null);
      }).toThrow();
    });

    it('Basic tests', function () {
      var rest = ' \t\na';
      expect(trimRight2016(rest + ' \t\n')).toBe(rest, 'strips whitespace off the left side');
      expect(trimRight2016('a')).toBe('a', 'noop when no whitespace');
      rest = allWhitespaceChars2016 + 'a';
      expect(trimRight2016(rest + allWhitespaceChars2016)).toBe(rest, 'all expected whitespace chars are trimmed');
      var zeroWidth = '\u200b';
      expect(trimRight(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function () {
      var values = [
        true,
        'abc',
        1,
        function () {},
        [],
        /r/
      ];

      var expected = values.map(String);
      var actual = values.map(trimRight2016);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        trimRight2016(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        trimRight2016(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        trimRight2016(Object(symObj));
      }).toThrow();
    });
  });

  describe('trimRight2018', function () {
    it('should throw when target is null or undefined', function () {
      expect(function () {
        trimRight2018();
      }).toThrow();

      expect(function () {
        trimRight2018(void 0);
      }).toThrow();

      expect(function () {
        trimRight2018(null);
      }).toThrow();
    });

    it('Basic tests', function () {
      var rest = ' \t\na';
      expect(trimRight2018(rest + ' \t\n')).toBe(rest, 'strips whitespace off the left side');
      expect(trimRight2018('a')).toBe('a', 'noop when no whitespace');
      rest = allWhitespaceChars2018 + 'a';
      expect(trimRight2018(rest + allWhitespaceChars2018)).toBe(rest, 'all expected whitespace chars are trimmed');
      var zeroWidth = '\u200b';
      expect(trimRight(zeroWidth)).toBe(zeroWidth, 'zero width space does not trim');
    });

    it('should return a string for everything', function () {
      var values = [
        true,
        'abc',
        1,
        function () {},
        [],
        /r/
      ];

      var expected = values.map(String);
      var actual = values.map(trimRight2018);
      expect(actual).toEqual(expected);
    });

    it('should throw for Object.create(null)', function () {
      expect(function () {
        trimRight2018(Object.create(null));
      }).toThrow();
    });

    ifSymbolIt('should throw for Symbol', function () {
      var sym = Symbol('foo');
      expect(function () {
        trimRight2018(sym);
      }).toThrow();

      var symObj = Object(sym);
      expect(function () {
        trimRight2018(Object(symObj));
      }).toThrow();
    });
  });
});
