
# truthy

  simple util that return true if truthy

## Installation

    $ component install bredele/truthy

## API

### is#truthy(data)

  return true if truthy

### is#defined(data)

  return false if undefined

### is#type(name, data)

  return true if data is type of name


## Example
```js
var is = require('is');

is.truthy(true);
is.defined(undefined);
is.type('string', 'something');
```

## License

  MIT
