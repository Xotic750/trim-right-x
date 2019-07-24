<a href="https://travis-ci.org/Xotic750/trim-right-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/trim-right-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/trim-right-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/trim-right-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/trim-right-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/trim-right-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/trim-right-x"
  title="npm version">
<img src="https://badge.fury.io/js/trim-right-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/trim-right-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/trim-right-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_trim-right-x"></a>

## trim-right-x (a.k.a trimEnd in ES2019)

This method removes whitespace from the end of a string.

<a name="exp_module_trim-right-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>number</code> ⏏

<a name="module_trim-right-x"></a>

### `trim-right-x` ⇒ <code>string</code>

This method removes whitespace from the end of a string. (ES2019)

**Kind**: static property of [<code>trim-right-x</code>](#module_trim-right-x)  
**Returns**: <code>string</code> - The right trimmed string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description                                       |
| ------ | ------------------- | ------------------------------------------------- |
| string | <code>string</code> | The string to trim the right end whitespace from. |

**Example**

```js
import trimEnd from 'trim-right-x';

console.log(trimEnd(' \t\na \t\n') === ' \t\na'); // true
```
