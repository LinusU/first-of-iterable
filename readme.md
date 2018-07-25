# First of Iterable

Returns the first item of an iterable.

## Installation

```sh
npm install --save first-of-iterable
```

## Usage

```js
const firstOfIterable = require('first-of-iterable')

console.log(firstOfIterable([]))
//=> undefined

console.log(firstOfIterable([1, 2, 3]))
//=> 1
```

## API

### `firstOfIterable(iterable)`

Return the first value of the iterable, or `undefined` if the iterable is empty.
