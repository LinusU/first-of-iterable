const firstOfIterable = require('./')
const assert = require('assert')

function * empty () {
}

function * oneThenThrow () {
  yield 1
  throw new Error('Should only read the first value')
}

assert.strictEqual(firstOfIterable([]), undefined)
assert.strictEqual(firstOfIterable([1]), 1)
assert.strictEqual(firstOfIterable([1, 2]), 1)
assert.strictEqual(firstOfIterable([1, 2, 3]), 1)

assert.strictEqual(firstOfIterable(empty()), undefined)
assert.strictEqual(firstOfIterable(oneThenThrow()), 1)
