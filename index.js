module.exports = function firstOfIterable (iterable) {
  for (const item of iterable) return item
}
