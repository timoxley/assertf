var assert = require('..')

var a = 1
var b = 2

function test(fn) {
  try {
    fn()
  } catch(e) {
    console.info(e.message)
  }
}

test(function() {
  assert(a == b, '%d should equal %d!', a, b)
})

test(function() {
  assert.ok(a == b, '%d should equal %d!', a, b)
})

test(function() {
  assert.equal(a, b, 'assert.equal(%d, %d)')
})

test(function() {
  assert.equal(a, b, 'assert.equal(%d [%s], %d [%s])', a, typeof a, b, typeof b)
})

test(function() {
  assert.ifError(new Error('omg'), 'Bad Error %s')
})

test(function() {
  assert.ifError(new Error('omg'))
})

test(function() {
  function shouldThrow(){}
  assert.throws(shouldThrow, '%s should have thrown!')
})
