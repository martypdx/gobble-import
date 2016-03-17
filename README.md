# gobble-import

Description

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-import
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'folder' ).transform( 'import' );
```


## Tests

Uses [gobble-test](https://github.com/gobblejs/gobble-test) example based testing. Run via:

```bash
npm test
```

## Credits


## License

MIT. Copyright 2015 Marty Nelson
