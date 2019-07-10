<a href="https://travis-ci.org/Xotic750/trim-right-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/trim-right-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/trim-right-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/trim-right-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/trim-right-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/trim-right-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/trim-right-x" title="npm version">
<img src="https://badge.fury.io/js/trim-right-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_trim-right-x"></a>

## trim-right-x

This method removes whitespace from the right end of a string.

- [trim-right-x](#module_trim-right-x)
  - [`.trimRight2016`](#module_trim-right-x.trimRight2016) ⇒ <code>string</code>

<a name="module_trim-right-x.trimRight2016"></a>

### `trim-right-x.trimRight2016` ⇒ <code>string</code>

This method removes whitespace from the right end of a string. (ES2016)

**Kind**: static property of [<code>trim-right-x</code>](#module_trim-right-x)  
**Returns**: <code>string</code> - The right trimmed string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description                                       |
| ------ | ------------------- | ------------------------------------------------- |
| string | <code>string</code> | The string to trim the right end whitespace from. |

**Example**

```js
import {trimRight2016} from 'trim-right-x';

console.log(trimRight2016(' \t\na \t\n') === ' \t\na'); // true
```

<a name="module_trim-right-x"></a>

### `trim-right-x` ⇒ <code>string</code>

This method removes whitespace from the right end of a string. (ES2018)

**Kind**: static property of [<code>trim-right-x</code>](#module_trim-right-x)  
**Returns**: <code>string</code> - The right trimmed string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description                                       |
| ------ | ------------------- | ------------------------------------------------- |
| string | <code>string</code> | The string to trim the right end whitespace from. |

**Example**

```js
import trimRight from 'trim-right-x';

console.log(trimRight(' \t\na \t\n') === ' \t\na'); // true
```
