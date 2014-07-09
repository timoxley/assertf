# assertf

Node's built-in `assert` API augmented with printf-style message formatting.

## Installation

```
npm install assertf
```

## Examples

```js
var assert = require('assertf')

var apples = 2
var bananas = 3

// message vars are automatically positioned appropriately
assert.equal(apples, bananas, 'Oops, %d does not equal %d!')
// => AssertionError: Oops, 2 does not equal 3!

// you can also supply your own substitutions
assert.equal(apples, bananas, 'We have %d bananas, but only %d apples.',
    bananas, apples)
// => AssertionError: We have 3 bananas, but only 2 apples.

```
```js
assert(a == b, '%d should equal %d!', a, b
// => AssertionError: 2 should equal 3!
```
```js
assert.ok(a == b, '%d should equal %d!', a, b)
// => AssertionError: 2 should equal 3!
```
```js
assert.equal(a, b, 'assert.equal(%d, %d)')
// => AssertionError: assert.equal(2, 3)
```
```js
assert.equal(a, b, 'assert.equal(%d [%s], %d [%s])', a, typeof a, b, typeof b)
// => AssertionError: assert.equal(2 [number], 3 [number])
```
```js
assert.ifError(new Error('omg'), 'Bad Error %s')
// => AssertionError: Bad Error omg
```
```js
assert.ifError(new Error('omg'))
// => Error: omg
```
```js
function shouldThrow(){}
assert.throws(shouldThrow, '%s should have thrown!')
// => AssertionError: shouldThrow should have thrown!
```

## License

MIT
