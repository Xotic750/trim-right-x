/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/trim-right-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/trim-right-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/trim-right-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/trim-right-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/trim-right-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/trim-right-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/trim-right-x" title="npm version">
 * <img src="https://badge.fury.io/js/trim-right-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * This method removes whitespace from the right end of a string.
 *
 * Requires ES3 or above.
 *
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-right-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $toString = require('to-string-x');
  var ws = require('white-space-x').ws;
  var reRight = new RegExp('[' + ws + ']+$');

  /**
   * This method removes whitespace from the right end of a string
   *
   * @param {String} string The string to trim the right end whitespace from.
   * @return {undefined|string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  module.exports = function trimRight(string) {
    return $toString(string).replace(reRight, '');
  };
}());
