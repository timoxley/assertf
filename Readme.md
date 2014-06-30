# assertf

Node's built-in `assert` API augmented with message formatting printf-style.

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

## License

MIT
