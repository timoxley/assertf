"use strict"

var assert = require('assert')
var before = require('beforefn')
var format = require('util').format

var api = {}

// augment assert methods
Object.keys(assert).forEach(function(key) {
  if (typeof assert[key] !== 'function') return
  // TODO: figure out how/if to deal with assert.fail
  if (key === 'fail') return
  api[key] = before(assert[key], function fn() {
    var msgPos = fn.fn.length - 1
    // throws has optional argument
    if (key === 'throws') {
      if (typeof fn.args[1] === 'string') {
        msgPos = 1
      }
    }
    // ifError doesn't normally have a message.
    // Allow formatting the err.message with message arg.
    if (key === 'ifError') {
      if (fn.args[0] && 'message' in fn.args[0]) {
        if (fn.args[1]) {
          fn.args[0].message = format(fn.args[1], fn.args[0])
        }
      }
      return
    }

    var msg = fn.args[msgPos]
    var vars = fn.args.slice(msgPos + 1)
    if (!vars.length) {
      if (hasSubstitutions(msg)) vars = fn.args.slice(0, msgPos)
    }
    if (msg) fn.args[msgPos] = format.apply(null, [msg].concat(vars))
  })
})

// default export is 'ok'
module.exports = api.ok

// attach all other functions to default export
for (var key in api) {
  if (typeof api[key] !== 'function') continue
  module.exports[key] = api[key]
}

function hasSubstitutions(msg) {
  if (msg.indexOf('%s') !== -1) return true
  if (msg.indexOf('%d') !== -1) return true
  if (msg.indexOf('%j') !== -1) return true
  return false
}
